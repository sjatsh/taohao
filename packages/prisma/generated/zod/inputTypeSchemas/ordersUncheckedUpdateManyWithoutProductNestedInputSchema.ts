import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ordersCreateWithoutProductInputSchema } from './ordersCreateWithoutProductInputSchema';
import { ordersUncheckedCreateWithoutProductInputSchema } from './ordersUncheckedCreateWithoutProductInputSchema';
import { ordersCreateOrConnectWithoutProductInputSchema } from './ordersCreateOrConnectWithoutProductInputSchema';
import { ordersUpsertWithWhereUniqueWithoutProductInputSchema } from './ordersUpsertWithWhereUniqueWithoutProductInputSchema';
import { ordersCreateManyProductInputEnvelopeSchema } from './ordersCreateManyProductInputEnvelopeSchema';
import { ordersWhereUniqueInputSchema } from './ordersWhereUniqueInputSchema';
import { ordersUpdateWithWhereUniqueWithoutProductInputSchema } from './ordersUpdateWithWhereUniqueWithoutProductInputSchema';
import { ordersUpdateManyWithWhereWithoutProductInputSchema } from './ordersUpdateManyWithWhereWithoutProductInputSchema';
import { ordersScalarWhereInputSchema } from './ordersScalarWhereInputSchema';

export const ordersUncheckedUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.ordersUncheckedUpdateManyWithoutProductNestedInput> = z.object({
  create: z.union([ z.lazy(() => ordersCreateWithoutProductInputSchema),z.lazy(() => ordersCreateWithoutProductInputSchema).array(),z.lazy(() => ordersUncheckedCreateWithoutProductInputSchema),z.lazy(() => ordersUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ordersCreateOrConnectWithoutProductInputSchema),z.lazy(() => ordersCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ordersUpsertWithWhereUniqueWithoutProductInputSchema),z.lazy(() => ordersUpsertWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ordersCreateManyProductInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ordersWhereUniqueInputSchema),z.lazy(() => ordersWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ordersWhereUniqueInputSchema),z.lazy(() => ordersWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ordersWhereUniqueInputSchema),z.lazy(() => ordersWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ordersWhereUniqueInputSchema),z.lazy(() => ordersWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ordersUpdateWithWhereUniqueWithoutProductInputSchema),z.lazy(() => ordersUpdateWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ordersUpdateManyWithWhereWithoutProductInputSchema),z.lazy(() => ordersUpdateManyWithWhereWithoutProductInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ordersScalarWhereInputSchema),z.lazy(() => ordersScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ordersUncheckedUpdateManyWithoutProductNestedInputSchema;
