import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutModule_item_question_statusInputObjectSchema } from './UserCreateWithoutModule_item_question_statusInput.schema';
import { UserUncheckedCreateWithoutModule_item_question_statusInputObjectSchema } from './UserUncheckedCreateWithoutModule_item_question_statusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutModule_item_question_statusInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () => UserCreateWithoutModule_item_question_statusInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedCreateWithoutModule_item_question_statusInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutModule_item_question_statusInputObjectSchema =
  Schema;
