import { z } from 'zod';

export const OrdersScalarFieldEnumSchema = z.enum(['id','order_id','product_id','num','price','email','payment','status','kami','created_at','updated_at']);

export default OrdersScalarFieldEnumSchema;
