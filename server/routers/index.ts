import { trpc } from "../trpc";
import { products } from "@/server/routers/products";
import { orders } from "@/server/routers/orders";

export const router = trpc.router({
  products,
  orders,
});

export type Router = typeof router;
