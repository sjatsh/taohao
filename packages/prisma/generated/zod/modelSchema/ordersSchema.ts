import { z } from 'zod';

/////////////////////////////////////////
// ORDERS SCHEMA
/////////////////////////////////////////

export const ordersSchema = z.object({
  id: z.number().int(),
  order_id: z.string(),
  product_id: z.number().int(),
  num: z.number().int(),
  price: z.number(),
  email: z.string(),
  payment: z.string(),
  status: z.number().int(),
  kami: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type orders = z.infer<typeof ordersSchema>

export default ordersSchema;
