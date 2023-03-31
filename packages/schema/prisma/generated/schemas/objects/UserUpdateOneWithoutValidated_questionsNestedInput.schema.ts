import { z } from 'zod';
import { UserCreateWithoutValidated_questionsInputObjectSchema } from './UserCreateWithoutValidated_questionsInput.schema';
import { UserUncheckedCreateWithoutValidated_questionsInputObjectSchema } from './UserUncheckedCreateWithoutValidated_questionsInput.schema';
import { UserCreateOrConnectWithoutValidated_questionsInputObjectSchema } from './UserCreateOrConnectWithoutValidated_questionsInput.schema';
import { UserUpsertWithoutValidated_questionsInputObjectSchema } from './UserUpsertWithoutValidated_questionsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutValidated_questionsInputObjectSchema } from './UserUpdateWithoutValidated_questionsInput.schema';
import { UserUncheckedUpdateWithoutValidated_questionsInputObjectSchema } from './UserUncheckedUpdateWithoutValidated_questionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutValidated_questionsNestedInput> =
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
      upsert: z
        .lazy(() => UserUpsertWithoutValidated_questionsInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutValidated_questionsInputObjectSchema),
          z.lazy(
            () =>
              UserUncheckedUpdateWithoutValidated_questionsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneWithoutValidated_questionsNestedInputObjectSchema =
  Schema;
