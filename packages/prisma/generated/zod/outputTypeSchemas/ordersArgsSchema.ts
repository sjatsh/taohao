import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ordersSelectSchema } from '../inputTypeSchemas/ordersSelectSchema';
import { ordersIncludeSchema } from '../inputTypeSchemas/ordersIncludeSchema';

export const ordersArgsSchema: z.ZodType<Prisma.ordersDefaultArgs> = z.object({
  select: z.lazy(() => ordersSelectSchema).optional(),
  include: z.lazy(() => ordersIncludeSchema).optional(),
}).strict();

export default ordersArgsSchema;
