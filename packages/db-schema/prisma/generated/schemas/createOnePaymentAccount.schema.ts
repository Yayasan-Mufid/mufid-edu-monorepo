import { z } from 'zod';
import { PaymentAccountSelectObjectSchema } from './objects/PaymentAccountSelect.schema';
import { PaymentAccountIncludeObjectSchema } from './objects/PaymentAccountInclude.schema';
import { PaymentAccountCreateInputObjectSchema } from './objects/PaymentAccountCreateInput.schema';
import { PaymentAccountUncheckedCreateInputObjectSchema } from './objects/PaymentAccountUncheckedCreateInput.schema';

export const PaymentAccountCreateOneSchema = z.object({
  select: PaymentAccountSelectObjectSchema.optional(),
  include: PaymentAccountIncludeObjectSchema.optional(),
  data: z.union([
    PaymentAccountCreateInputObjectSchema,
    PaymentAccountUncheckedCreateInputObjectSchema,
  ]),
});
