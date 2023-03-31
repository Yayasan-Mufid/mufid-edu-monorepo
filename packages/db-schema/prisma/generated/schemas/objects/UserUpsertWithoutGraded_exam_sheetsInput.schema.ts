import { z } from 'zod';
import { UserUpdateWithoutGraded_exam_sheetsInputObjectSchema } from './UserUpdateWithoutGraded_exam_sheetsInput.schema';
import { UserUncheckedUpdateWithoutGraded_exam_sheetsInputObjectSchema } from './UserUncheckedUpdateWithoutGraded_exam_sheetsInput.schema';
import { UserCreateWithoutGraded_exam_sheetsInputObjectSchema } from './UserCreateWithoutGraded_exam_sheetsInput.schema';
import { UserUncheckedCreateWithoutGraded_exam_sheetsInputObjectSchema } from './UserUncheckedCreateWithoutGraded_exam_sheetsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutGraded_exam_sheetsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutGraded_exam_sheetsInputObjectSchema),
      z.lazy(
        () => UserUncheckedUpdateWithoutGraded_exam_sheetsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutGraded_exam_sheetsInputObjectSchema),
      z.lazy(
        () => UserUncheckedCreateWithoutGraded_exam_sheetsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const UserUpsertWithoutGraded_exam_sheetsInputObjectSchema = Schema;
