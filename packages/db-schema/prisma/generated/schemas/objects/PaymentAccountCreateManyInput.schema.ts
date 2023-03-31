import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountCreateManyInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    type: z.string(),
    account_identifier: z.string(),
    description: z.string(),
    logo_url: z.string(),
  })
  .strict();

export const PaymentAccountCreateManyInputObjectSchema = Schema;
