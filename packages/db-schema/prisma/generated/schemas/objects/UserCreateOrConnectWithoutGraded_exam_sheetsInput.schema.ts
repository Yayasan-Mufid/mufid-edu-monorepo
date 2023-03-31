import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutGraded_exam_sheetsInputObjectSchema } from './UserCreateWithoutGraded_exam_sheetsInput.schema';
import { UserUncheckedCreateWithoutGraded_exam_sheetsInputObjectSchema } from './UserUncheckedCreateWithoutGraded_exam_sheetsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutGraded_exam_sheetsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutGraded_exam_sheetsInputObjectSchema),
        z.lazy(
          () => UserUncheckedCreateWithoutGraded_exam_sheetsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutGraded_exam_sheetsInputObjectSchema =
  Schema;
