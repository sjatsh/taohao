import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VerificationTokenCreateManyInputSchema } from '../inputTypeSchemas/VerificationTokenCreateManyInputSchema'

export const VerificationTokenAndReturnCreateManyArgsSchema: z.ZodType<Prisma.VerificationTokenAndReturnCreateManyArgs> = z.object({
  data: z.union([ VerificationTokenCreateManyInputSchema,VerificationTokenCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default VerificationTokenAndReturnCreateManyArgsSchema;
