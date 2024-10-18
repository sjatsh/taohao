import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const CreateManyUserAndReturnOutputTypeSelectSchema: z.ZodType<Prisma.CreateManyUserAndReturnOutputTypeSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
}).strict()

export default CreateManyUserAndReturnOutputTypeSelectSchema;
