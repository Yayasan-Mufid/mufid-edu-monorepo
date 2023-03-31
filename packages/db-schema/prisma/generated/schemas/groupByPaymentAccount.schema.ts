import { z } from 'zod';
import { PaymentAccountWhereInputObjectSchema } from './objects/PaymentAccountWhereInput.schema';
import { PaymentAccountOrderByWithAggregationInputObjectSchema } from './objects/PaymentAccountOrderByWithAggregationInput.schema';
import { PaymentAccountScalarWhereWithAggregatesInputObjectSchema } from './objects/PaymentAccountScalarWhereWithAggregatesInput.schema';
import { PaymentAccountScalarFieldEnumSchema } from './enums/PaymentAccountScalarFieldEnum.schema';

export const PaymentAccountGroupBySchema = z.object({
  where: PaymentAccountWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      PaymentAccountOrderByWithAggregationInputObjectSchema,
      PaymentAccountOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: PaymentAccountScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(PaymentAccountScalarFieldEnumSchema),
});
