import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CreateManySessionAndReturnOutputTypeSelectSchema } from '../inputTypeSchemas/CreateManySessionAndReturnOutputTypeSelectSchema';
import { CreateManySessionAndReturnOutputTypeIncludeSchema } from '../inputTypeSchemas/CreateManySessionAndReturnOutputTypeIncludeSchema';

export const CreateManySessionAndReturnOutputTypeArgsSchema: z.ZodType<Prisma.CreateManySessionAndReturnOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => CreateManySessionAndReturnOutputTypeSelectSchema).optional(),
  include: z.lazy(() => CreateManySessionAndReturnOutputTypeIncludeSchema).optional(),
}).strict();

export default CreateManySessionAndReturnOutputTypeArgsSchema;
