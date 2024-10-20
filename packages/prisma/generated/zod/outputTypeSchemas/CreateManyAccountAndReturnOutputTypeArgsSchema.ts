import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CreateManyAccountAndReturnOutputTypeSelectSchema } from '../inputTypeSchemas/CreateManyAccountAndReturnOutputTypeSelectSchema';
import { CreateManyAccountAndReturnOutputTypeIncludeSchema } from '../inputTypeSchemas/CreateManyAccountAndReturnOutputTypeIncludeSchema';

export const CreateManyAccountAndReturnOutputTypeArgsSchema: z.ZodType<Prisma.CreateManyAccountAndReturnOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => CreateManyAccountAndReturnOutputTypeSelectSchema).optional(),
  include: z.lazy(() => CreateManyAccountAndReturnOutputTypeIncludeSchema).optional(),
}).strict();

export default CreateManyAccountAndReturnOutputTypeArgsSchema;
