import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','name','email','created_at','updated_at']);

export default UserScalarFieldEnumSchema;
