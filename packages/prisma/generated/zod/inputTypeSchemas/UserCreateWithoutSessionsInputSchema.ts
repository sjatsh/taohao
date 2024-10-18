import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const UserCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateWithoutSessionsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional().nullable()
}).strict();

export default UserCreateWithoutSessionsInputSchema;
