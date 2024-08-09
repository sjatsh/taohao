export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "TaoHao",
  tg_name: "taohao360",
  description: "",
  pages: {
    orders: {
      search: "/orders/search",
      buy: "/orders/buy",
    },
  },
  xunhu_pay: {
    appid: "201906126443",
    app_secret: "8a8ea0bb67351e15ecd086209f7d3f01",
    api_url: "https://api.diypc.com.cn/payment",
    wap_url: "https://taohao.sjis.me",
    wap_name: "淘号网",
  },
};
