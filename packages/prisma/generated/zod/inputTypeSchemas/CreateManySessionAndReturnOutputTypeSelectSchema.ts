import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"

export const CreateManySessionAndReturnOutputTypeSelectSchema: z.ZodType<Prisma.CreateManySessionAndReturnOutputTypeSelect> = z.object({
  id: z.boolean().optional(),
  sessionToken: z.boolean().optional(),
  userId: z.boolean().optional(),
  expires: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export default CreateManySessionAndReturnOutputTypeSelectSchema;
