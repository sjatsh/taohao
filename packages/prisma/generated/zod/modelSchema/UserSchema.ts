import { z } from 'zod';

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string().cuid(),
  name: z.string().nullable(),
  email: z.string().nullable(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date().nullable(),
})

export type User = z.infer<typeof UserSchema>

export default UserSchema;
