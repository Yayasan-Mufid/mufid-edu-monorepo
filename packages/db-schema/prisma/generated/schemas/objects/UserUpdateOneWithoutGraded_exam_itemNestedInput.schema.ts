import { z } from 'zod';
import { UserCreateWithoutGraded_exam_itemInputObjectSchema } from './UserCreateWithoutGraded_exam_itemInput.schema';
import { UserUncheckedCreateWithoutGraded_exam_itemInputObjectSchema } from './UserUncheckedCreateWithoutGraded_exam_itemInput.schema';
import { UserCreateOrConnectWithoutGraded_exam_itemInputObjectSchema } from './UserCreateOrConnectWithoutGraded_exam_itemInput.schema';
import { UserUpsertWithoutGraded_exam_itemInputObjectSchema } from './UserUpsertWithoutGraded_exam_itemInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutGraded_exam_itemInputObjectSchema } from './UserUpdateWithoutGraded_exam_itemInput.schema';
import { UserUncheckedUpdateWithoutGraded_exam_itemInputObjectSchema } from './UserUncheckedUpdateWithoutGraded_exam_itemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutGraded_exam_itemNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutGraded_exam_itemInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutGraded_exam_itemInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutGraded_exam_itemInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutGraded_exam_itemInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutGraded_exam_itemInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutGraded_exam_itemInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneWithoutGraded_exam_itemNestedInputObjectSchema =
  Schema;
