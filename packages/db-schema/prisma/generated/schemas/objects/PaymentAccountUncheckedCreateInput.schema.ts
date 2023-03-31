import { z } from 'zod';
import { InvoiceUncheckedCreateNestedManyWithoutAccountInputObjectSchema } from './InvoiceUncheckedCreateNestedManyWithoutAccountInput.schema';
import { StudyGroupUncheckedCreateNestedManyWithoutInvoice_accountInputObjectSchema } from './StudyGroupUncheckedCreateNestedManyWithoutInvoice_accountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    type: z.string(),
    account_identifier: z.string(),
    description: z.string(),
    logo_url: z.string(),
    invoices: z
      .lazy(
        () => InvoiceUncheckedCreateNestedManyWithoutAccountInputObjectSchema,
      )
      .optional(),
    study_groups: z
      .lazy(
        () =>
          StudyGroupUncheckedCreateNestedManyWithoutInvoice_accountInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PaymentAccountUncheckedCreateInputObjectSchema = Schema;
