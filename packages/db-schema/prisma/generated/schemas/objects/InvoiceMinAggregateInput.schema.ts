import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    user_id: z.literal(true).optional(),
    title: z.literal(true).optional(),
    description: z.literal(true).optional(),
    amount: z.literal(true).optional(),
    payment_method: z.literal(true).optional(),
    payment_account_id: z.literal(true).optional(),
    paid_amount: z.literal(true).optional(),
    mismatch: z.literal(true).optional(),
    paid_at: z.literal(true).optional(),
    payment_receipt_url: z.literal(true).optional(),
    confirmer: z.literal(true).optional(),
    confirmed_at: z.literal(true).optional(),
    status: z.literal(true).optional(),
    deadline: z.literal(true).optional(),
  })
  .strict();

export const InvoiceMinAggregateInputObjectSchema = Schema;
