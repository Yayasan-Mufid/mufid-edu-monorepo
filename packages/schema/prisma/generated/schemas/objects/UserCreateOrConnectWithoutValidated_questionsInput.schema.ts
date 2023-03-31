import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutValidated_questionsInputObjectSchema } from './UserCreateWithoutValidated_questionsInput.schema';
import { UserUncheckedCreateWithoutValidated_questionsInputObjectSchema } from './UserUncheckedCreateWithoutValidated_questionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutValidated_questionsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutValidated_questionsInputObjectSchema),
        z.lazy(
          () => UserUncheckedCreateWithoutValidated_questionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutValidated_questionsInputObjectSchema =
  Schema;
