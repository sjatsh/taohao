import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const CreateManyUserAndReturnOutputTypeSelectSchema: z.ZodType<Prisma.CreateManyUserAndReturnOutputTypeSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  password: z.boolean().optional(),
  email: z.boolean().optional(),
  emailVerified: z.boolean().optional(),
  image: z.boolean().optional(),
}).strict()

export default CreateManyUserAndReturnOutputTypeSelectSchema;
