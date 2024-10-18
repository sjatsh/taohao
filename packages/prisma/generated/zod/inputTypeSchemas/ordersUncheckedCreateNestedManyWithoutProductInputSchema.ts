import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ordersCreateWithoutProductInputSchema } from './ordersCreateWithoutProductInputSchema';
import { ordersUncheckedCreateWithoutProductInputSchema } from './ordersUncheckedCreateWithoutProductInputSchema';
import { ordersCreateOrConnectWithoutProductInputSchema } from './ordersCreateOrConnectWithoutProductInputSchema';
import { ordersCreateManyProductInputEnvelopeSchema } from './ordersCreateManyProductInputEnvelopeSchema';
import { ordersWhereUniqueInputSchema } from './ordersWhereUniqueInputSchema';

export const ordersUncheckedCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.ordersUncheckedCreateNestedManyWithoutProductInput> = z.object({
  create: z.union([ z.lazy(() => ordersCreateWithoutProductInputSchema),z.lazy(() => ordersCreateWithoutProductInputSchema).array(),z.lazy(() => ordersUncheckedCreateWithoutProductInputSchema),z.lazy(() => ordersUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ordersCreateOrConnectWithoutProductInputSchema),z.lazy(() => ordersCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ordersCreateManyProductInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ordersWhereUniqueInputSchema),z.lazy(() => ordersWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ordersUncheckedCreateNestedManyWithoutProductInputSchema;
