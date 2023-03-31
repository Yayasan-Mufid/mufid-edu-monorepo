import { z } from 'zod';
import { UserUpdateWithoutExam_sheetsInputObjectSchema } from './UserUpdateWithoutExam_sheetsInput.schema';
import { UserUncheckedUpdateWithoutExam_sheetsInputObjectSchema } from './UserUncheckedUpdateWithoutExam_sheetsInput.schema';
import { UserCreateWithoutExam_sheetsInputObjectSchema } from './UserCreateWithoutExam_sheetsInput.schema';
import { UserUncheckedCreateWithoutExam_sheetsInputObjectSchema } from './UserUncheckedCreateWithoutExam_sheetsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutExam_sheetsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutExam_sheetsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutExam_sheetsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutExam_sheetsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutExam_sheetsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutExam_sheetsInputObjectSchema = Schema;
