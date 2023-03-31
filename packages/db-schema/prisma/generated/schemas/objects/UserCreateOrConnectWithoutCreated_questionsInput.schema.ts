import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutCreated_questionsInputObjectSchema } from './UserCreateWithoutCreated_questionsInput.schema';
import { UserUncheckedCreateWithoutCreated_questionsInputObjectSchema } from './UserUncheckedCreateWithoutCreated_questionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutCreated_questionsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutCreated_questionsInputObjectSchema),
        z.lazy(
          () => UserUncheckedCreateWithoutCreated_questionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutCreated_questionsInputObjectSchema =
  Schema;
