import { z } from 'zod';
import { UserCreateWithoutManaged_groupsInputObjectSchema } from './UserCreateWithoutManaged_groupsInput.schema';
import { UserUncheckedCreateWithoutManaged_groupsInputObjectSchema } from './UserUncheckedCreateWithoutManaged_groupsInput.schema';
import { UserCreateOrConnectWithoutManaged_groupsInputObjectSchema } from './UserCreateOrConnectWithoutManaged_groupsInput.schema';
import { UserUpsertWithoutManaged_groupsInputObjectSchema } from './UserUpsertWithoutManaged_groupsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutManaged_groupsInputObjectSchema } from './UserUpdateWithoutManaged_groupsInput.schema';
import { UserUncheckedUpdateWithoutManaged_groupsInputObjectSchema } from './UserUncheckedUpdateWithoutManaged_groupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutManaged_groupsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutManaged_groupsInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutManaged_groupsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutManaged_groupsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutManaged_groupsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutManaged_groupsInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutManaged_groupsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutManaged_groupsNestedInputObjectSchema =
  Schema;
