import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ordersWhereInputSchema } from './ordersWhereInputSchema';

export const OrdersListRelationFilterSchema: z.ZodType<Prisma.OrdersListRelationFilter> = z.object({
  every: z.lazy(() => ordersWhereInputSchema).optional(),
  some: z.lazy(() => ordersWhereInputSchema).optional(),
  none: z.lazy(() => ordersWhereInputSchema).optional()
}).strict();

export default OrdersListRelationFilterSchema;
