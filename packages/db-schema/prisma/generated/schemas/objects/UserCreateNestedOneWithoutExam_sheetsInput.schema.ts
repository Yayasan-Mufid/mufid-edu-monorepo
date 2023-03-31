import { z } from 'zod';
import { UserCreateWithoutExam_sheetsInputObjectSchema } from './UserCreateWithoutExam_sheetsInput.schema';
import { UserUncheckedCreateWithoutExam_sheetsInputObjectSchema } from './UserUncheckedCreateWithoutExam_sheetsInput.schema';
import { UserCreateOrConnectWithoutExam_sheetsInputObjectSchema } from './UserCreateOrConnectWithoutExam_sheetsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutExam_sheetsInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutExam_sheetsInputObjectSchema = Schema;
