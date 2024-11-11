import cuid from 'cuid'

import { Md5 } from 'ts-md5'

import {
    XUNHU_PAY_API_URL,
    XUNHU_PAY_APP_ID,
    XUNHU_PAY_APP_SECRET,
    XUNHU_PAY_WAP_NAME,
    XUNHU_PAY_WAP_URL,
} from '@taohao/env/src/server'

export interface wxPayOptions {
    product_id: number
    order_id: string
    money: number
    title: string
    email: string
}

export async function wxPay(options: wxPayOptions) {
    const params = {
        version: '1.1',
        appid: XUNHU_PAY_APP_ID,
        trade_order_id: options.order_id,
        total_fee: options.money.toString(),
        title: options.title,
        time: Math.floor(new Date().valueOf() / 1000).toString(),
        notify_url: `${XUNHU_PAY_WAP_URL}/api/wxnotify`,
        // return_url: `${XUNHU_PAY_WAP_URL}/orders/buy/${options.product_id}`,
        nonce_str: cuid(),
        type: 'WAP',
        wap_url: XUNHU_PAY_WAP_URL,
        wap_name: XUNHU_PAY_WAP_NAME,
        attach: options.email,
    }
    const hash = getHash(params)
    const requestParams = new URLSearchParams({ ...params, hash })

    const resp = await fetch(XUNHU_PAY_API_URL + '/do.html', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: requestParams,
    })

    if (resp.status !== 200) {
        throw new Error(resp.statusText)
    }
    const data = await resp.json()

    if (data.errcode !== 0) {
        throw new Error(data.errmsg)
    }

    return data
}

export async function query(orderId: string) {
    const params = {
        appid: XUNHU_PAY_APP_ID,
        out_trade_order: orderId,
        time: Math.floor(new Date().valueOf() / 1000).toString(),
        nonce_str: cuid(),
    }
    const hash = getHash(params)
    const requestParams = new URLSearchParams({ ...params, hash })

    const resp = await fetch(XUNHU_PAY_API_URL + '/query.html', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: requestParams,
    })

    if (resp.status !== 200) {
        throw new Error(resp.statusText)
    }
    const data = await resp.json()

    if (data.errcode !== 0) {
        throw new Error(data.errmsg)
    }

    return data
}

export function getHash(params: { [key: string]: string }) {
    const sortedParams = Object.keys(params)
        .filter((key) => params[key] && key !== 'hash')
        .sort()
        .map((key) => `${key}=${params[key]}`)
        .join('&')

    return Md5.hashStr(sortedParams + XUNHU_PAY_APP_SECRET)
}
