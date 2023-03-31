import { z } from 'zod';
import { UserCreateWithoutCreated_questionsInputObjectSchema } from './UserCreateWithoutCreated_questionsInput.schema';
import { UserUncheckedCreateWithoutCreated_questionsInputObjectSchema } from './UserUncheckedCreateWithoutCreated_questionsInput.schema';
import { UserCreateOrConnectWithoutCreated_questionsInputObjectSchema } from './UserCreateOrConnectWithoutCreated_questionsInput.schema';
import { UserUpsertWithoutCreated_questionsInputObjectSchema } from './UserUpsertWithoutCreated_questionsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutCreated_questionsInputObjectSchema } from './UserUpdateWithoutCreated_questionsInput.schema';
import { UserUncheckedUpdateWithoutCreated_questionsInputObjectSchema } from './UserUncheckedUpdateWithoutCreated_questionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCreated_questionsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutCreated_questionsInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutCreated_questionsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => UserCreateOrConnectWithoutCreated_questionsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutCreated_questionsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutCreated_questionsInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutCreated_questionsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutCreated_questionsNestedInputObjectSchema =
  Schema;
