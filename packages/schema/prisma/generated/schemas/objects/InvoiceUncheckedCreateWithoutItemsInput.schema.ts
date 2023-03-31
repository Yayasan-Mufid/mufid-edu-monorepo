import { z } from 'zod';
import { StudyGroupApplicantUncheckedCreateNestedOneWithoutInvoiceInputObjectSchema } from './StudyGroupApplicantUncheckedCreateNestedOneWithoutInvoiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceUncheckedCreateWithoutItemsInput> = z
  .object({
    id: z.string().optional(),
    user_id: z.string(),
    title: z.string(),
    description: z.string(),
    amount: z.number(),
    payment_method: z.string(),
    payment_account_id: z.string(),
    paid_amount: z.number().optional().nullable(),
    mismatch: z.number().optional().nullable(),
    paid_at: z.date().optional().nullable(),
    payment_receipt_url: z.string().optional().nullable(),
    confirmer: z.string().optional().nullable(),
    confirmed_at: z.date().optional().nullable(),
    status: z.string().optional(),
    deadline: z.date(),
    applicant: z
      .lazy(
        () =>
          StudyGroupApplicantUncheckedCreateNestedOneWithoutInvoiceInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const InvoiceUncheckedCreateWithoutItemsInputObjectSchema = Schema;
