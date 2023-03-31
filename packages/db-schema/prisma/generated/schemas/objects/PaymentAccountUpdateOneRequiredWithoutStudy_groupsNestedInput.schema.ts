import { z } from 'zod';
import { PaymentAccountCreateWithoutStudy_groupsInputObjectSchema } from './PaymentAccountCreateWithoutStudy_groupsInput.schema';
import { PaymentAccountUncheckedCreateWithoutStudy_groupsInputObjectSchema } from './PaymentAccountUncheckedCreateWithoutStudy_groupsInput.schema';
import { PaymentAccountCreateOrConnectWithoutStudy_groupsInputObjectSchema } from './PaymentAccountCreateOrConnectWithoutStudy_groupsInput.schema';
import { PaymentAccountUpsertWithoutStudy_groupsInputObjectSchema } from './PaymentAccountUpsertWithoutStudy_groupsInput.schema';
import { PaymentAccountWhereUniqueInputObjectSchema } from './PaymentAccountWhereUniqueInput.schema';
import { PaymentAccountUpdateWithoutStudy_groupsInputObjectSchema } from './PaymentAccountUpdateWithoutStudy_groupsInput.schema';
import { PaymentAccountUncheckedUpdateWithoutStudy_groupsInputObjectSchema } from './PaymentAccountUncheckedUpdateWithoutStudy_groupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountUpdateOneRequiredWithoutStudy_groupsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => PaymentAccountCreateWithoutStudy_groupsInputObjectSchema,
          ),
          z.lazy(
            () =>
              PaymentAccountUncheckedCreateWithoutStudy_groupsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            PaymentAccountCreateOrConnectWithoutStudy_groupsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => PaymentAccountUpsertWithoutStudy_groupsInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => PaymentAccountWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () => PaymentAccountUpdateWithoutStudy_groupsInputObjectSchema,
          ),
          z.lazy(
            () =>
              PaymentAccountUncheckedUpdateWithoutStudy_groupsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const PaymentAccountUpdateOneRequiredWithoutStudy_groupsNestedInputObjectSchema =
  Schema;
