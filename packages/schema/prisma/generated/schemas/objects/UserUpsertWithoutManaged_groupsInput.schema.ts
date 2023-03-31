import { z } from 'zod';
import { UserUpdateWithoutManaged_groupsInputObjectSchema } from './UserUpdateWithoutManaged_groupsInput.schema';
import { UserUncheckedUpdateWithoutManaged_groupsInputObjectSchema } from './UserUncheckedUpdateWithoutManaged_groupsInput.schema';
import { UserCreateWithoutManaged_groupsInputObjectSchema } from './UserCreateWithoutManaged_groupsInput.schema';
import { UserUncheckedCreateWithoutManaged_groupsInputObjectSchema } from './UserUncheckedCreateWithoutManaged_groupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutManaged_groupsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutManaged_groupsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutManaged_groupsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutManaged_groupsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutManaged_groupsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutManaged_groupsInputObjectSchema = Schema;
