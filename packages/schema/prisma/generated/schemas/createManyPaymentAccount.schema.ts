import { z } from 'zod';
import { PaymentAccountCreateManyInputObjectSchema } from './objects/PaymentAccountCreateManyInput.schema';

export const PaymentAccountCreateManySchema = z.object({
  data: z.union([
    PaymentAccountCreateManyInputObjectSchema,
    z.array(PaymentAccountCreateManyInputObjectSchema),
  ]),
});
