import { z } from 'zod';
import { PaymentAccountCreateWithoutInvoicesInputObjectSchema } from './PaymentAccountCreateWithoutInvoicesInput.schema';
import { PaymentAccountUncheckedCreateWithoutInvoicesInputObjectSchema } from './PaymentAccountUncheckedCreateWithoutInvoicesInput.schema';
import { PaymentAccountCreateOrConnectWithoutInvoicesInputObjectSchema } from './PaymentAccountCreateOrConnectWithoutInvoicesInput.schema';
import { PaymentAccountUpsertWithoutInvoicesInputObjectSchema } from './PaymentAccountUpsertWithoutInvoicesInput.schema';
import { PaymentAccountWhereUniqueInputObjectSchema } from './PaymentAccountWhereUniqueInput.schema';
import { PaymentAccountUpdateWithoutInvoicesInputObjectSchema } from './PaymentAccountUpdateWithoutInvoicesInput.schema';
import { PaymentAccountUncheckedUpdateWithoutInvoicesInputObjectSchema } from './PaymentAccountUncheckedUpdateWithoutInvoicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountUpdateOneRequiredWithoutInvoicesNestedInput> =
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
      upsert: z
        .lazy(() => PaymentAccountUpsertWithoutInvoicesInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => PaymentAccountWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => PaymentAccountUpdateWithoutInvoicesInputObjectSchema),
          z.lazy(
            () => PaymentAccountUncheckedUpdateWithoutInvoicesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const PaymentAccountUpdateOneRequiredWithoutInvoicesNestedInputObjectSchema =
  Schema;
