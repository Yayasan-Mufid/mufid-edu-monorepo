import { z } from 'zod';
import { UserCreateNestedOneWithoutInvoicesInputObjectSchema } from './UserCreateNestedOneWithoutInvoicesInput.schema';
import { PaymentAccountCreateNestedOneWithoutInvoicesInputObjectSchema } from './PaymentAccountCreateNestedOneWithoutInvoicesInput.schema';
import { InvoiceItemCreateNestedManyWithoutInvoiceInputObjectSchema } from './InvoiceItemCreateNestedManyWithoutInvoiceInput.schema';
import { StudyGroupApplicantCreateNestedOneWithoutInvoiceInputObjectSchema } from './StudyGroupApplicantCreateNestedOneWithoutInvoiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceCreateWithoutConfirmed_byInput> = z
  .object({
    id: z.string().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutInvoicesInputObjectSchema),
    title: z.string(),
    description: z.string(),
    amount: z.number(),
    payment_method: z.string(),
    account: z.lazy(
      () => PaymentAccountCreateNestedOneWithoutInvoicesInputObjectSchema,
    ),
    paid_amount: z.number().optional().nullable(),
    mismatch: z.number().optional().nullable(),
    paid_at: z.date().optional().nullable(),
    payment_receipt_url: z.string().optional().nullable(),
    confirmed_at: z.date().optional().nullable(),
    status: z.string().optional(),
    deadline: z.date(),
    items: z
      .lazy(() => InvoiceItemCreateNestedManyWithoutInvoiceInputObjectSchema)
      .optional(),
    applicant: z
      .lazy(
        () => StudyGroupApplicantCreateNestedOneWithoutInvoiceInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const InvoiceCreateWithoutConfirmed_byInputObjectSchema = Schema;
