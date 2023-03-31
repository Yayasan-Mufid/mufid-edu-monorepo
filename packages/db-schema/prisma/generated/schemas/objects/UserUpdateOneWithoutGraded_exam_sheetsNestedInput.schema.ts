import { z } from 'zod';
import { UserCreateWithoutGraded_exam_sheetsInputObjectSchema } from './UserCreateWithoutGraded_exam_sheetsInput.schema';
import { UserUncheckedCreateWithoutGraded_exam_sheetsInputObjectSchema } from './UserUncheckedCreateWithoutGraded_exam_sheetsInput.schema';
import { UserCreateOrConnectWithoutGraded_exam_sheetsInputObjectSchema } from './UserCreateOrConnectWithoutGraded_exam_sheetsInput.schema';
import { UserUpsertWithoutGraded_exam_sheetsInputObjectSchema } from './UserUpsertWithoutGraded_exam_sheetsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutGraded_exam_sheetsInputObjectSchema } from './UserUpdateWithoutGraded_exam_sheetsInput.schema';
import { UserUncheckedUpdateWithoutGraded_exam_sheetsInputObjectSchema } from './UserUncheckedUpdateWithoutGraded_exam_sheetsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutGraded_exam_sheetsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutGraded_exam_sheetsInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutGraded_exam_sheetsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => UserCreateOrConnectWithoutGraded_exam_sheetsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutGraded_exam_sheetsInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutGraded_exam_sheetsInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutGraded_exam_sheetsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneWithoutGraded_exam_sheetsNestedInputObjectSchema =
  Schema;
