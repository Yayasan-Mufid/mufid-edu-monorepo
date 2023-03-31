import { z } from 'zod';
import { StudyGroupUncheckedCreateNestedManyWithoutInvoice_accountInputObjectSchema } from './StudyGroupUncheckedCreateNestedManyWithoutInvoice_accountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountUncheckedCreateWithoutInvoicesInput> =
  z
    .object({
      id: z.string().optional(),
      name: z.string(),
      type: z.string(),
      account_identifier: z.string(),
      description: z.string(),
      logo_url: z.string(),
      study_groups: z
        .lazy(
          () =>
            StudyGroupUncheckedCreateNestedManyWithoutInvoice_accountInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const PaymentAccountUncheckedCreateWithoutInvoicesInputObjectSchema =
  Schema;
