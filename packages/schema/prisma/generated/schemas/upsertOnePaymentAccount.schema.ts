import { z } from 'zod';
import { PaymentAccountSelectObjectSchema } from './objects/PaymentAccountSelect.schema';
import { PaymentAccountIncludeObjectSchema } from './objects/PaymentAccountInclude.schema';
import { PaymentAccountWhereUniqueInputObjectSchema } from './objects/PaymentAccountWhereUniqueInput.schema';
import { PaymentAccountCreateInputObjectSchema } from './objects/PaymentAccountCreateInput.schema';
import { PaymentAccountUncheckedCreateInputObjectSchema } from './objects/PaymentAccountUncheckedCreateInput.schema';
import { PaymentAccountUpdateInputObjectSchema } from './objects/PaymentAccountUpdateInput.schema';
import { PaymentAccountUncheckedUpdateInputObjectSchema } from './objects/PaymentAccountUncheckedUpdateInput.schema';

export const PaymentAccountUpsertSchema = z.object({
  select: PaymentAccountSelectObjectSchema.optional(),
  include: PaymentAccountIncludeObjectSchema.optional(),
  where: PaymentAccountWhereUniqueInputObjectSchema,
  create: z.union([
    PaymentAccountCreateInputObjectSchema,
    PaymentAccountUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    PaymentAccountUpdateInputObjectSchema,
    PaymentAccountUncheckedUpdateInputObjectSchema,
  ]),
});
