import { z } from 'zod';
import { UserCreateWithoutExam_sheetsInputObjectSchema } from './UserCreateWithoutExam_sheetsInput.schema';
import { UserUncheckedCreateWithoutExam_sheetsInputObjectSchema } from './UserUncheckedCreateWithoutExam_sheetsInput.schema';
import { UserCreateOrConnectWithoutExam_sheetsInputObjectSchema } from './UserCreateOrConnectWithoutExam_sheetsInput.schema';
import { UserUpsertWithoutExam_sheetsInputObjectSchema } from './UserUpsertWithoutExam_sheetsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutExam_sheetsInputObjectSchema } from './UserUpdateWithoutExam_sheetsInput.schema';
import { UserUncheckedUpdateWithoutExam_sheetsInputObjectSchema } from './UserUncheckedUpdateWithoutExam_sheetsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutExam_sheetsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutExam_sheetsInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutExam_sheetsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutExam_sheetsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutExam_sheetsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutExam_sheetsInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutExam_sheetsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutExam_sheetsNestedInputObjectSchema =
  Schema;
