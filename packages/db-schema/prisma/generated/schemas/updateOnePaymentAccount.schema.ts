import { z } from 'zod';
import { PaymentAccountSelectObjectSchema } from './objects/PaymentAccountSelect.schema';
import { PaymentAccountIncludeObjectSchema } from './objects/PaymentAccountInclude.schema';
import { PaymentAccountUpdateInputObjectSchema } from './objects/PaymentAccountUpdateInput.schema';
import { PaymentAccountUncheckedUpdateInputObjectSchema } from './objects/PaymentAccountUncheckedUpdateInput.schema';
import { PaymentAccountWhereUniqueInputObjectSchema } from './objects/PaymentAccountWhereUniqueInput.schema';

export const PaymentAccountUpdateOneSchema = z.object({
  select: PaymentAccountSelectObjectSchema.optional(),
  include: PaymentAccountIncludeObjectSchema.optional(),
  data: z.union([
    PaymentAccountUpdateInputObjectSchema,
    PaymentAccountUncheckedUpdateInputObjectSchema,
  ]),
  where: PaymentAccountWhereUniqueInputObjectSchema,
});
