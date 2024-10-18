import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { productsWhereInputSchema } from './productsWhereInputSchema';

export const ProductsRelationFilterSchema: z.ZodType<Prisma.ProductsRelationFilter> = z.object({
  is: z.lazy(() => productsWhereInputSchema).optional(),
  isNot: z.lazy(() => productsWhereInputSchema).optional()
}).strict();

export default ProductsRelationFilterSchema;
