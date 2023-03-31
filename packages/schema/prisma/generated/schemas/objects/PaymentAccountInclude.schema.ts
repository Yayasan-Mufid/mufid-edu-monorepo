import { z } from 'zod';
import { InvoiceFindManySchema } from '../findManyInvoice.schema';
import { StudyGroupFindManySchema } from '../findManyStudyGroup.schema';
import { PaymentAccountCountOutputTypeArgsObjectSchema } from './PaymentAccountCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountInclude> = z
  .object({
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

export const PaymentAccountIncludeObjectSchema = Schema;
