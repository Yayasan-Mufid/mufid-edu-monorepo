import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { PaymentAccountArgsObjectSchema } from './PaymentAccountArgs.schema';
import { InvoiceItemFindManySchema } from '../findManyInvoiceItem.schema';
import { StudyGroupApplicantArgsObjectSchema } from './StudyGroupApplicantArgs.schema';
import { InvoiceCountOutputTypeArgsObjectSchema } from './InvoiceCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceSelect> = z
  .object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    amount: z.boolean().optional(),
    payment_method: z.boolean().optional(),
    payment_account_id: z.boolean().optional(),
    account: z
      .union([z.boolean(), z.lazy(() => PaymentAccountArgsObjectSchema)])
      .optional(),
    paid_amount: z.boolean().optional(),
    mismatch: z.boolean().optional(),
    paid_at: z.boolean().optional(),
    payment_receipt_url: z.boolean().optional(),
    confirmer: z.boolean().optional(),
    confirmed_by: z
      .union([z.boolean(), z.lazy(() => UserArgsObjectSchema)])
      .optional(),
    confirmed_at: z.boolean().optional(),
    status: z.boolean().optional(),
    deadline: z.boolean().optional(),
    items: z
      .union([z.boolean(), z.lazy(() => InvoiceItemFindManySchema)])
      .optional(),
    applicant: z
      .union([z.boolean(), z.lazy(() => StudyGroupApplicantArgsObjectSchema)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => InvoiceCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const InvoiceSelectObjectSchema = Schema;
