import { z } from 'zod';
import { PaymentAccountOrderByWithRelationInputObjectSchema } from './objects/PaymentAccountOrderByWithRelationInput.schema';
import { PaymentAccountWhereInputObjectSchema } from './objects/PaymentAccountWhereInput.schema';
import { PaymentAccountWhereUniqueInputObjectSchema } from './objects/PaymentAccountWhereUniqueInput.schema';
import { PaymentAccountCountAggregateInputObjectSchema } from './objects/PaymentAccountCountAggregateInput.schema';
import { PaymentAccountMinAggregateInputObjectSchema } from './objects/PaymentAccountMinAggregateInput.schema';
import { PaymentAccountMaxAggregateInputObjectSchema } from './objects/PaymentAccountMaxAggregateInput.schema';

export const PaymentAccountAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), PaymentAccountCountAggregateInputObjectSchema])
    .optional(),
  _min: PaymentAccountMinAggregateInputObjectSchema.optional(),
  _max: PaymentAccountMaxAggregateInputObjectSchema.optional(),
});
