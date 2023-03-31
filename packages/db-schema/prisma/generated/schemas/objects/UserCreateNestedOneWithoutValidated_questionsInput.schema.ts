import { z } from 'zod';
import { UserCreateWithoutValidated_questionsInputObjectSchema } from './UserCreateWithoutValidated_questionsInput.schema';
import { UserUncheckedCreateWithoutValidated_questionsInputObjectSchema } from './UserUncheckedCreateWithoutValidated_questionsInput.schema';
import { UserCreateOrConnectWithoutValidated_questionsInputObjectSchema } from './UserCreateOrConnectWithoutValidated_questionsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutValidated_questionsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutValidated_questionsInputObjectSchema),
          z.lazy(
            () =>
              UserUncheckedCreateWithoutValidated_questionsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => UserCreateOrConnectWithoutValidated_questionsInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutValidated_questionsInputObjectSchema =
  Schema;
