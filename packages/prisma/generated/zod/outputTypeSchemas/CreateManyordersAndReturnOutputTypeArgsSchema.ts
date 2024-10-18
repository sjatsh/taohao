import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CreateManyordersAndReturnOutputTypeSelectSchema } from '../inputTypeSchemas/CreateManyordersAndReturnOutputTypeSelectSchema';
import { CreateManyordersAndReturnOutputTypeIncludeSchema } from '../inputTypeSchemas/CreateManyordersAndReturnOutputTypeIncludeSchema';

export const CreateManyordersAndReturnOutputTypeArgsSchema: z.ZodType<Prisma.CreateManyordersAndReturnOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => CreateManyordersAndReturnOutputTypeSelectSchema).optional(),
  include: z.lazy(() => CreateManyordersAndReturnOutputTypeIncludeSchema).optional(),
}).strict();

export default CreateManyordersAndReturnOutputTypeArgsSchema;
