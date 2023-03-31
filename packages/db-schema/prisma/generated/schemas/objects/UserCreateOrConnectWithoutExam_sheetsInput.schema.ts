import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutExam_sheetsInputObjectSchema } from './UserCreateWithoutExam_sheetsInput.schema';
import { UserUncheckedCreateWithoutExam_sheetsInputObjectSchema } from './UserUncheckedCreateWithoutExam_sheetsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutExam_sheetsInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutExam_sheetsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutExam_sheetsInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutExam_sheetsInputObjectSchema = Schema;
