import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountCountOutputTypeSelect> = z
  .object({
    invoices: z.boolean().optional(),
    study_groups: z.boolean().optional(),
  })
  .strict();

export const PaymentAccountCountOutputTypeSelectObjectSchema = Schema;
