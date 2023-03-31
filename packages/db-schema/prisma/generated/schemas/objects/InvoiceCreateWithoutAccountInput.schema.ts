import { z } from 'zod';
import { UserCreateNestedOneWithoutInvoicesInputObjectSchema } from './UserCreateNestedOneWithoutInvoicesInput.schema';
import { UserCreateNestedOneWithoutConfirmed_by_me_invoicesInputObjectSchema } from './UserCreateNestedOneWithoutConfirmed_by_me_invoicesInput.schema';
import { InvoiceItemCreateNestedManyWithoutInvoiceInputObjectSchema } from './InvoiceItemCreateNestedManyWithoutInvoiceInput.schema';
import { StudyGroupApplicantCreateNestedOneWithoutInvoiceInputObjectSchema } from './StudyGroupApplicantCreateNestedOneWithoutInvoiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceCreateWithoutAccountInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string(),
    amount: z.number(),
    payment_method: z.string(),
    paid_amount: z.number().optional().nullable(),
    mismatch: z.number().optional().nullable(),
    paid_at: z.date().optional().nullable(),
    payment_receipt_url: z.string().optional().nullable(),
    confirmed_at: z.date().optional().nullable(),
    status: z.string().optional(),
    deadline: z.date(),
    user: z.lazy(() => UserCreateNestedOneWithoutInvoicesInputObjectSchema),
    confirmed_by: z
      .lazy(
        () =>
          UserCreateNestedOneWithoutConfirmed_by_me_invoicesInputObjectSchema,
      )
      .optional(),
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

export const InvoiceCreateWithoutAccountInputObjectSchema = Schema;
