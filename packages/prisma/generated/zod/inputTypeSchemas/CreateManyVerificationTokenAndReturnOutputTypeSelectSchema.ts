import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const CreateManyVerificationTokenAndReturnOutputTypeSelectSchema: z.ZodType<Prisma.CreateManyVerificationTokenAndReturnOutputTypeSelect> = z.object({
  identifier: z.boolean().optional(),
  token: z.boolean().optional(),
  expires: z.boolean().optional(),
}).strict()

export default CreateManyVerificationTokenAndReturnOutputTypeSelectSchema;
