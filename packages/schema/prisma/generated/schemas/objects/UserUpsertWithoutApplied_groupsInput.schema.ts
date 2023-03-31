import { z } from 'zod';
import { UserUpdateWithoutApplied_groupsInputObjectSchema } from './UserUpdateWithoutApplied_groupsInput.schema';
import { UserUncheckedUpdateWithoutApplied_groupsInputObjectSchema } from './UserUncheckedUpdateWithoutApplied_groupsInput.schema';
import { UserCreateWithoutApplied_groupsInputObjectSchema } from './UserCreateWithoutApplied_groupsInput.schema';
import { UserUncheckedCreateWithoutApplied_groupsInputObjectSchema } from './UserUncheckedCreateWithoutApplied_groupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutApplied_groupsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutApplied_groupsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutApplied_groupsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutApplied_groupsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutApplied_groupsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutApplied_groupsInputObjectSchema = Schema;
