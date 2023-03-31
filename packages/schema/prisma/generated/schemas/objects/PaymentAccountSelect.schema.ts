import { z } from 'zod';
import { InvoiceFindManySchema } from '../findManyInvoice.schema';
import { StudyGroupFindManySchema } from '../findManyStudyGroup.schema';
import { PaymentAccountCountOutputTypeArgsObjectSchema } from './PaymentAccountCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    type: z.boolean().optional(),
    account_identifier: z.boolean().optional(),
    description: z.boolean().optional(),
    logo_url: z.boolean().optional(),
    invoices: z
      .union([z.boolean(), z.lazy(() => InvoiceFindManySchema)])
      .optional(),
    study_groups: z
      .union([z.boolean(), z.lazy(() => StudyGroupFindManySchema)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => PaymentAccountCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const PaymentAccountSelectObjectSchema = Schema;
