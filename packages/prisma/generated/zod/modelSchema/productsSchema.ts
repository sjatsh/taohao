import { z } from 'zod';

/////////////////////////////////////////
// PRODUCTS SCHEMA
/////////////////////////////////////////

export const productsSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  num: z.number().int(),
  price: z.number(),
  origin_price: z.number().nullable(),
  image: z.string(),
  content: z.string(),
  pay_type: z.string(),
  kami: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  keywords: z.string(),
})

export type products = z.infer<typeof productsSchema>

export default productsSchema;
