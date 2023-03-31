import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutGraded_exam_itemInputObjectSchema } from './UserCreateWithoutGraded_exam_itemInput.schema';
import { UserUncheckedCreateWithoutGraded_exam_itemInputObjectSchema } from './UserUncheckedCreateWithoutGraded_exam_itemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutGraded_exam_itemInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutGraded_exam_itemInputObjectSchema),
        z.lazy(
          () => UserUncheckedCreateWithoutGraded_exam_itemInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutGraded_exam_itemInputObjectSchema =
  Schema;
