import { z } from 'zod';
import { PaymentAccountSelectObjectSchema } from './objects/PaymentAccountSelect.schema';
import { PaymentAccountIncludeObjectSchema } from './objects/PaymentAccountInclude.schema';
import { PaymentAccountWhereUniqueInputObjectSchema } from './objects/PaymentAccountWhereUniqueInput.schema';

export const PaymentAccountDeleteOneSchema = z.object({
  select: PaymentAccountSelectObjectSchema.optional(),
  include: PaymentAccountIncludeObjectSchema.optional(),
  where: PaymentAccountWhereUniqueInputObjectSchema,
});
