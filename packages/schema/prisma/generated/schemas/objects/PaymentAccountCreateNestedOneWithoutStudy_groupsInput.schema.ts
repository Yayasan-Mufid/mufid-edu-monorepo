import { z } from 'zod';
import { PaymentAccountCreateWithoutStudy_groupsInputObjectSchema } from './PaymentAccountCreateWithoutStudy_groupsInput.schema';
import { PaymentAccountUncheckedCreateWithoutStudy_groupsInputObjectSchema } from './PaymentAccountUncheckedCreateWithoutStudy_groupsInput.schema';
import { PaymentAccountCreateOrConnectWithoutStudy_groupsInputObjectSchema } from './PaymentAccountCreateOrConnectWithoutStudy_groupsInput.schema';
import { PaymentAccountWhereUniqueInputObjectSchema } from './PaymentAccountWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountCreateNestedOneWithoutStudy_groupsInput> =
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
      connect: z
        .lazy(() => PaymentAccountWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const PaymentAccountCreateNestedOneWithoutStudy_groupsInputObjectSchema =
  Schema;
