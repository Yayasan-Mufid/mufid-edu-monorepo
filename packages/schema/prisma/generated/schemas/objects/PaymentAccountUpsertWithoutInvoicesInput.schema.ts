import { z } from 'zod';
import { PaymentAccountUpdateWithoutInvoicesInputObjectSchema } from './PaymentAccountUpdateWithoutInvoicesInput.schema';
import { PaymentAccountUncheckedUpdateWithoutInvoicesInputObjectSchema } from './PaymentAccountUncheckedUpdateWithoutInvoicesInput.schema';
import { PaymentAccountCreateWithoutInvoicesInputObjectSchema } from './PaymentAccountCreateWithoutInvoicesInput.schema';
import { PaymentAccountUncheckedCreateWithoutInvoicesInputObjectSchema } from './PaymentAccountUncheckedCreateWithoutInvoicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountUpsertWithoutInvoicesInput> = z
  .object({
    update: z.union([
      z.lazy(() => PaymentAccountUpdateWithoutInvoicesInputObjectSchema),
      z.lazy(
        () => PaymentAccountUncheckedUpdateWithoutInvoicesInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => PaymentAccountCreateWithoutInvoicesInputObjectSchema),
      z.lazy(
        () => PaymentAccountUncheckedCreateWithoutInvoicesInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const PaymentAccountUpsertWithoutInvoicesInputObjectSchema = Schema;
