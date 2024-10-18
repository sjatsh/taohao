import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SessionCreateManyInputSchema } from '../inputTypeSchemas/SessionCreateManyInputSchema'

export const SessionAndReturnCreateManyArgsSchema: z.ZodType<Prisma.SessionAndReturnCreateManyArgs> = z.object({
  data: z.union([ SessionCreateManyInputSchema,SessionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default SessionAndReturnCreateManyArgsSchema;
