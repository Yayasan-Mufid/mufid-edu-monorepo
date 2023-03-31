import { z } from 'zod';
import { UserUpdateWithoutValidated_questionsInputObjectSchema } from './UserUpdateWithoutValidated_questionsInput.schema';
import { UserUncheckedUpdateWithoutValidated_questionsInputObjectSchema } from './UserUncheckedUpdateWithoutValidated_questionsInput.schema';
import { UserCreateWithoutValidated_questionsInputObjectSchema } from './UserCreateWithoutValidated_questionsInput.schema';
import { UserUncheckedCreateWithoutValidated_questionsInputObjectSchema } from './UserUncheckedCreateWithoutValidated_questionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutValidated_questionsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutValidated_questionsInputObjectSchema),
      z.lazy(
        () => UserUncheckedUpdateWithoutValidated_questionsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutValidated_questionsInputObjectSchema),
      z.lazy(
        () => UserUncheckedCreateWithoutValidated_questionsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const UserUpsertWithoutValidated_questionsInputObjectSchema = Schema;
