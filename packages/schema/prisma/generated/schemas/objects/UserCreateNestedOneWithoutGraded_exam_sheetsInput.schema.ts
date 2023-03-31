import { z } from 'zod';
import { UserCreateWithoutGraded_exam_sheetsInputObjectSchema } from './UserCreateWithoutGraded_exam_sheetsInput.schema';
import { UserUncheckedCreateWithoutGraded_exam_sheetsInputObjectSchema } from './UserUncheckedCreateWithoutGraded_exam_sheetsInput.schema';
import { UserCreateOrConnectWithoutGraded_exam_sheetsInputObjectSchema } from './UserCreateOrConnectWithoutGraded_exam_sheetsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutGraded_exam_sheetsInput> =
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutGraded_exam_sheetsInputObjectSchema =
  Schema;
