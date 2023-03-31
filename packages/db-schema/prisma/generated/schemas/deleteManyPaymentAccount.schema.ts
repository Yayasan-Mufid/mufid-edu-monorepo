import { z } from 'zod';
import { PaymentAccountWhereInputObjectSchema } from './objects/PaymentAccountWhereInput.schema';

export const PaymentAccountDeleteManySchema = z.object({
  where: PaymentAccountWhereInputObjectSchema.optional(),
});
