import { z } from 'zod';
import { UserUpdateWithoutCreated_questionsInputObjectSchema } from './UserUpdateWithoutCreated_questionsInput.schema';
import { UserUncheckedUpdateWithoutCreated_questionsInputObjectSchema } from './UserUncheckedUpdateWithoutCreated_questionsInput.schema';
import { UserCreateWithoutCreated_questionsInputObjectSchema } from './UserCreateWithoutCreated_questionsInput.schema';
import { UserUncheckedCreateWithoutCreated_questionsInputObjectSchema } from './UserUncheckedCreateWithoutCreated_questionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutCreated_questionsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutCreated_questionsInputObjectSchema),
      z.lazy(
        () => UserUncheckedUpdateWithoutCreated_questionsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutCreated_questionsInputObjectSchema),
      z.lazy(
        () => UserUncheckedCreateWithoutCreated_questionsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const UserUpsertWithoutCreated_questionsInputObjectSchema = Schema;
