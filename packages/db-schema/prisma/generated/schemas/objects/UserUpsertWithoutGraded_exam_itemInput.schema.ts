import { z } from 'zod';
import { UserUpdateWithoutGraded_exam_itemInputObjectSchema } from './UserUpdateWithoutGraded_exam_itemInput.schema';
import { UserUncheckedUpdateWithoutGraded_exam_itemInputObjectSchema } from './UserUncheckedUpdateWithoutGraded_exam_itemInput.schema';
import { UserCreateWithoutGraded_exam_itemInputObjectSchema } from './UserCreateWithoutGraded_exam_itemInput.schema';
import { UserUncheckedCreateWithoutGraded_exam_itemInputObjectSchema } from './UserUncheckedCreateWithoutGraded_exam_itemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutGraded_exam_itemInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutGraded_exam_itemInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutGraded_exam_itemInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutGraded_exam_itemInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutGraded_exam_itemInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutGraded_exam_itemInputObjectSchema = Schema;
