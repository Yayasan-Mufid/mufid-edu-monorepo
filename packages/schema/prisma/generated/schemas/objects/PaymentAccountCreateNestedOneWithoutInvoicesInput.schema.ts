import { z } from 'zod';
import { PaymentAccountCreateWithoutInvoicesInputObjectSchema } from './PaymentAccountCreateWithoutInvoicesInput.schema';
import { PaymentAccountUncheckedCreateWithoutInvoicesInputObjectSchema } from './PaymentAccountUncheckedCreateWithoutInvoicesInput.schema';
import { PaymentAccountCreateOrConnectWithoutInvoicesInputObjectSchema } from './PaymentAccountCreateOrConnectWithoutInvoicesInput.schema';
import { PaymentAccountWhereUniqueInputObjectSchema } from './PaymentAccountWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountCreateNestedOneWithoutInvoicesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PaymentAccountCreateWithoutInvoicesInputObjectSchema),
          z.lazy(
            () => PaymentAccountUncheckedCreateWithoutInvoicesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => PaymentAccountCreateOrConnectWithoutInvoicesInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => PaymentAccountWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const PaymentAccountCreateNestedOneWithoutInvoicesInputObjectSchema =
  Schema;
