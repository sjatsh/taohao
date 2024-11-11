import { z } from 'zod';

export const ProductsScalarFieldEnumSchema = z.enum(['id','title','num','price','origin_price','image','content','pay_type','kami','created_at','updated_at','keywords']);

export default ProductsScalarFieldEnumSchema;
