import { z } from 'zod';
import { InvoiceUncheckedCreateNestedManyWithoutAccountInputObjectSchema } from './InvoiceUncheckedCreateNestedManyWithoutAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountUncheckedCreateWithoutStudy_groupsInput> =
  z
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
    })
    .strict();

export const PaymentAccountUncheckedCreateWithoutStudy_groupsInputObjectSchema =
  Schema;
