import { z } from 'zod';
import { StudyGroupCreateNestedManyWithoutInvoice_accountInputObjectSchema } from './StudyGroupCreateNestedManyWithoutInvoice_accountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountCreateWithoutInvoicesInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    type: z.string(),
    account_identifier: z.string(),
    description: z.string(),
    logo_url: z.string(),
    study_groups: z
      .lazy(
        () => StudyGroupCreateNestedManyWithoutInvoice_accountInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PaymentAccountCreateWithoutInvoicesInputObjectSchema = Schema;
