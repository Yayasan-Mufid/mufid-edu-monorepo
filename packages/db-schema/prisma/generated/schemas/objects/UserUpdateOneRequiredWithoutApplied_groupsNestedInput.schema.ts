import { z } from 'zod';
import { UserCreateWithoutApplied_groupsInputObjectSchema } from './UserCreateWithoutApplied_groupsInput.schema';
import { UserUncheckedCreateWithoutApplied_groupsInputObjectSchema } from './UserUncheckedCreateWithoutApplied_groupsInput.schema';
import { UserCreateOrConnectWithoutApplied_groupsInputObjectSchema } from './UserCreateOrConnectWithoutApplied_groupsInput.schema';
import { UserUpsertWithoutApplied_groupsInputObjectSchema } from './UserUpsertWithoutApplied_groupsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutApplied_groupsInputObjectSchema } from './UserUpdateWithoutApplied_groupsInput.schema';
import { UserUncheckedUpdateWithoutApplied_groupsInputObjectSchema } from './UserUncheckedUpdateWithoutApplied_groupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutApplied_groupsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutApplied_groupsInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutApplied_groupsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutApplied_groupsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutApplied_groupsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutApplied_groupsInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutApplied_groupsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutApplied_groupsNestedInputObjectSchema =
  Schema;
