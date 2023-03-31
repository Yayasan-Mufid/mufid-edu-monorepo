import { z } from 'zod';
import { PaymentAccountWhereUniqueInputObjectSchema } from './PaymentAccountWhereUniqueInput.schema';
import { PaymentAccountCreateWithoutInvoicesInputObjectSchema } from './PaymentAccountCreateWithoutInvoicesInput.schema';
import { PaymentAccountUncheckedCreateWithoutInvoicesInputObjectSchema } from './PaymentAccountUncheckedCreateWithoutInvoicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountCreateOrConnectWithoutInvoicesInput> =
  z
    .object({
      where: z.lazy(() => PaymentAccountWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => PaymentAccountCreateWithoutInvoicesInputObjectSchema),
        z.lazy(
          () => PaymentAccountUncheckedCreateWithoutInvoicesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PaymentAccountCreateOrConnectWithoutInvoicesInputObjectSchema =
  Schema;
