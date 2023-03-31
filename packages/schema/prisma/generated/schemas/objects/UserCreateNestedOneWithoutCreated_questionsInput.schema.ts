import { z } from 'zod';
import { UserCreateWithoutCreated_questionsInputObjectSchema } from './UserCreateWithoutCreated_questionsInput.schema';
import { UserUncheckedCreateWithoutCreated_questionsInputObjectSchema } from './UserUncheckedCreateWithoutCreated_questionsInput.schema';
import { UserCreateOrConnectWithoutCreated_questionsInputObjectSchema } from './UserCreateOrConnectWithoutCreated_questionsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutCreated_questionsInput> =
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutCreated_questionsInputObjectSchema =
  Schema;
