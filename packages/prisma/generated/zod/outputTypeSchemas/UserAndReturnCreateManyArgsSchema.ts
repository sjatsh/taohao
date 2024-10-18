import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateManyInputSchema } from '../inputTypeSchemas/UserCreateManyInputSchema'

export const UserAndReturnCreateManyArgsSchema: z.ZodType<Prisma.UserAndReturnCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default UserAndReturnCreateManyArgsSchema;
