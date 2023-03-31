import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    type: z.literal(true).optional(),
    account_identifier: z.literal(true).optional(),
    description: z.literal(true).optional(),
    logo_url: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const PaymentAccountCountAggregateInputObjectSchema = Schema;
