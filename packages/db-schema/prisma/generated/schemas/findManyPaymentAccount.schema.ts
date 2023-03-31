import { z } from 'zod';
import { PaymentAccountSelectObjectSchema } from './objects/PaymentAccountSelect.schema';
import { PaymentAccountIncludeObjectSchema } from './objects/PaymentAccountInclude.schema';
import { PaymentAccountOrderByWithRelationInputObjectSchema } from './objects/PaymentAccountOrderByWithRelationInput.schema';
import { PaymentAccountWhereInputObjectSchema } from './objects/PaymentAccountWhereInput.schema';
import { PaymentAccountWhereUniqueInputObjectSchema } from './objects/PaymentAccountWhereUniqueInput.schema';
import { PaymentAccountScalarFieldEnumSchema } from './enums/PaymentAccountScalarFieldEnum.schema';

export const PaymentAccountFindManySchema = z.object({
  select: z.lazy(() => PaymentAccountSelectObjectSchema.optional()),
  include: z.lazy(() => PaymentAccountIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      PaymentAccountOrderByWithRelationInputObjectSchema,
      PaymentAccountOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PaymentAccountWhereInputObjectSchema.optional(),
  cursor: PaymentAccountWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(PaymentAccountScalarFieldEnumSchema).optional(),
});
