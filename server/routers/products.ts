import { router, trpc } from "../trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import type { Prisma } from "@prisma/client";
import { prisma } from "@/prisma";

export const defaultProductSelect = {
  id: true,
  title: true,
  num: true,
  price: true,
  origin_price: true,
  image: true,
  pay_type: true,
} satisfies Prisma.productsSelect;

export const products = router({
  list: trpc.procedure.query(async () => {
    const items = await prisma.products.findMany();
    return items.reverse();
  }),
  byId: trpc.procedure.input(z.number()).query(async ({ input }) => {
    const res = await prisma.products.findUnique({
      select: defaultProductSelect,
      where: {
        id: input,
      },
    });
    if (!res) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: `No post with id '${input}'`,
      });
    }
    return res;
  }),
});
