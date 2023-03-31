import { z } from 'zod';
import { PaymentAccountUpdateManyMutationInputObjectSchema } from './objects/PaymentAccountUpdateManyMutationInput.schema';
import { PaymentAccountWhereInputObjectSchema } from './objects/PaymentAccountWhereInput.schema';

export const PaymentAccountUpdateManySchema = z.object({
  data: PaymentAccountUpdateManyMutationInputObjectSchema,
  where: PaymentAccountWhereInputObjectSchema.optional(),
});
