import { z } from 'zod';
import { UserCreateWithoutGraded_exam_itemInputObjectSchema } from './UserCreateWithoutGraded_exam_itemInput.schema';
import { UserUncheckedCreateWithoutGraded_exam_itemInputObjectSchema } from './UserUncheckedCreateWithoutGraded_exam_itemInput.schema';
import { UserCreateOrConnectWithoutGraded_exam_itemInputObjectSchema } from './UserCreateOrConnectWithoutGraded_exam_itemInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutGraded_exam_itemInput> =
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutGraded_exam_itemInputObjectSchema =
  Schema;
