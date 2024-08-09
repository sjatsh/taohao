import { Md5 } from "ts-md5";
import { siteConfig } from "@/config/site";
import cuid from "cuid";

export interface wxPayOptions {
  order_id: string;
  money: number;
  title: string;
}

export async function wxPay(options: wxPayOptions) {
  const params = {
    version: "1.1",
    appid: siteConfig.xunhu_pay.appid,
    trade_order_id: options.order_id,
    total_fee: options.money.toString(),
    title: options.title,
    time: Math.floor(new Date().valueOf() / 1000).toString(),
    notify_url: `${siteConfig.xunhu_pay.wap_url}/api/wxnotify`,
    nonce_str: cuid(),
    type: "WAP",
    wap_url: siteConfig.xunhu_pay.wap_url,
    wap_name: siteConfig.xunhu_pay.wap_name,
  };
  const hash = getHash(params);
  const requestParams = new URLSearchParams({ ...params, hash });

  const resp = await fetch(siteConfig.xunhu_pay.api_url + "/do.html", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: requestParams,
  });
  if (resp.status !== 200) {
    throw new Error(resp.statusText);
  }
  const data = await resp.json();
  if (data.errcode !== 0) {
    throw new Error(data.errmsg);
  }
  return data;
}

export async function query(orderId: string) {
  const params = {
    appid: siteConfig.xunhu_pay.appid,
    out_trade_order: orderId,
    time: Math.floor(new Date().valueOf() / 1000).toString(),
    nonce_str: cuid(),
  };
  const hash = getHash(params);
  const requestParams = new URLSearchParams({ ...params, hash });

  const resp = await fetch(siteConfig.xunhu_pay.api_url + "/query.html", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: requestParams,
  });
  if (resp.status !== 200) {
    throw new Error(resp.statusText);
  }
  const data = await resp.json();
  if (data.errcode !== 0) {
    throw new Error(data.errmsg);
  }
  return data;
}

export function getHash(params: { [key: string]: string }) {
  const sortedParams = Object.keys(params)
    .filter((key) => params[key] && key !== "hash")
    .sort()
    .map((key) => `${key}=${params[key]}`)
    .join("&");
  return Md5.hashStr(sortedParams + siteConfig.xunhu_pay.app_secret);
}
