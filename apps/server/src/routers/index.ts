import { trpc } from '../trpc'

import { products } from './products'
import { orders } from './orders'

export const router = trpc.router({
  products,
  orders,
})

export type Router = typeof router
