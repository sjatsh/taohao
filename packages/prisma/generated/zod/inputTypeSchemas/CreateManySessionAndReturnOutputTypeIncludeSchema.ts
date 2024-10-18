import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"

export const CreateManySessionAndReturnOutputTypeIncludeSchema: z.ZodType<Prisma.CreateManySessionAndReturnOutputTypeInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export default CreateManySessionAndReturnOutputTypeIncludeSchema;
