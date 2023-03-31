import { z } from 'zod';
import { InvoiceCreateNestedManyWithoutAccountInputObjectSchema } from './InvoiceCreateNestedManyWithoutAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountCreateWithoutStudy_groupsInput> = z
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
  })
  .strict();

export const PaymentAccountCreateWithoutStudy_groupsInputObjectSchema = Schema;
