import NextLink from "next/link";

import { OrderCard } from "@/app/components/order";
import { siteConfig } from "@/config/site";
import { defaultProductSelect } from "@/server/routers/products";
import { prisma } from "@/prisma";
import Announcement from "@/app/components/announcement";

export default async function Home() {
  const products = await prisma.products.findMany({
    select: defaultProductSelect,
  });
  return (
    <>
      <Announcement />
      <div className="grid grid-cols-5 mt-5">
        {products.map((item) => (
          <NextLink
            key={item.id}
            className={`${item.num === 0 ? "pointer-events-none" : ""}`}
            href={siteConfig.pages.orders.buy + "/" + item.id}
          >
            <OrderCard
              key={item.id}
              id={item.id}
              num={item.num}
              img={item.image}
              price={item.price}
              title={item.title}
            />
          </NextLink>
        ))}
      </div>
    </>
  );
}
