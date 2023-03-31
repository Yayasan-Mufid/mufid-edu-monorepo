import { z } from 'zod';
import { UserUpdateWithoutEnrolled_groupsInputObjectSchema } from './UserUpdateWithoutEnrolled_groupsInput.schema';
import { UserUncheckedUpdateWithoutEnrolled_groupsInputObjectSchema } from './UserUncheckedUpdateWithoutEnrolled_groupsInput.schema';
import { UserCreateWithoutEnrolled_groupsInputObjectSchema } from './UserCreateWithoutEnrolled_groupsInput.schema';
import { UserUncheckedCreateWithoutEnrolled_groupsInputObjectSchema } from './UserUncheckedCreateWithoutEnrolled_groupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutEnrolled_groupsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutEnrolled_groupsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutEnrolled_groupsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutEnrolled_groupsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutEnrolled_groupsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutEnrolled_groupsInputObjectSchema = Schema;
