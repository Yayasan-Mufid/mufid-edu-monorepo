import { z } from 'zod';
import { InvoiceCreateNestedManyWithoutAccountInputObjectSchema } from './InvoiceCreateNestedManyWithoutAccountInput.schema';
import { StudyGroupCreateNestedManyWithoutInvoice_accountInputObjectSchema } from './StudyGroupCreateNestedManyWithoutInvoice_accountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    type: z.string(),
    account_identifier: z.string(),
    description: z.string(),
    logo_url: z.string(),
    invoices: z
      .lazy(() => InvoiceCreateNestedManyWithoutAccountInputObjectSchema)
      .optional(),
    study_groups: z
      .lazy(
        () => StudyGroupCreateNestedManyWithoutInvoice_accountInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PaymentAccountCreateInputObjectSchema = Schema;
