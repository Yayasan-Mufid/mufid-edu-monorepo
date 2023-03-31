import { z } from 'zod';
import { PaymentAccountWhereUniqueInputObjectSchema } from './PaymentAccountWhereUniqueInput.schema';
import { PaymentAccountCreateWithoutStudy_groupsInputObjectSchema } from './PaymentAccountCreateWithoutStudy_groupsInput.schema';
import { PaymentAccountUncheckedCreateWithoutStudy_groupsInputObjectSchema } from './PaymentAccountUncheckedCreateWithoutStudy_groupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountCreateOrConnectWithoutStudy_groupsInput> =
  z
    .object({
      where: z.lazy(() => PaymentAccountWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => PaymentAccountCreateWithoutStudy_groupsInputObjectSchema),
        z.lazy(
          () =>
            PaymentAccountUncheckedCreateWithoutStudy_groupsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PaymentAccountCreateOrConnectWithoutStudy_groupsInputObjectSchema =
  Schema;
