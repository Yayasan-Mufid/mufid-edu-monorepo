import { z } from 'zod';
import { PaymentAccountUpdateWithoutStudy_groupsInputObjectSchema } from './PaymentAccountUpdateWithoutStudy_groupsInput.schema';
import { PaymentAccountUncheckedUpdateWithoutStudy_groupsInputObjectSchema } from './PaymentAccountUncheckedUpdateWithoutStudy_groupsInput.schema';
import { PaymentAccountCreateWithoutStudy_groupsInputObjectSchema } from './PaymentAccountCreateWithoutStudy_groupsInput.schema';
import { PaymentAccountUncheckedCreateWithoutStudy_groupsInputObjectSchema } from './PaymentAccountUncheckedCreateWithoutStudy_groupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountUpsertWithoutStudy_groupsInput> = z
  .object({
    update: z.union([
      z.lazy(() => PaymentAccountUpdateWithoutStudy_groupsInputObjectSchema),
      z.lazy(
        () => PaymentAccountUncheckedUpdateWithoutStudy_groupsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => PaymentAccountCreateWithoutStudy_groupsInputObjectSchema),
      z.lazy(
        () => PaymentAccountUncheckedCreateWithoutStudy_groupsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const PaymentAccountUpsertWithoutStudy_groupsInputObjectSchema = Schema;
