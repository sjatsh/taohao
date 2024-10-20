import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','name','password','email','emailVerified','image']);

export default UserScalarFieldEnumSchema;
