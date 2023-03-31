import { z } from 'zod';
import { UserCreateWithoutEnrolled_groupsInputObjectSchema } from './UserCreateWithoutEnrolled_groupsInput.schema';
import { UserUncheckedCreateWithoutEnrolled_groupsInputObjectSchema } from './UserUncheckedCreateWithoutEnrolled_groupsInput.schema';
import { UserCreateOrConnectWithoutEnrolled_groupsInputObjectSchema } from './UserCreateOrConnectWithoutEnrolled_groupsInput.schema';
import { UserUpsertWithoutEnrolled_groupsInputObjectSchema } from './UserUpsertWithoutEnrolled_groupsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutEnrolled_groupsInputObjectSchema } from './UserUpdateWithoutEnrolled_groupsInput.schema';
import { UserUncheckedUpdateWithoutEnrolled_groupsInputObjectSchema } from './UserUncheckedUpdateWithoutEnrolled_groupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutEnrolled_groupsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutEnrolled_groupsInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutEnrolled_groupsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutEnrolled_groupsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutEnrolled_groupsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutEnrolled_groupsInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutEnrolled_groupsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutEnrolled_groupsNestedInputObjectSchema =
  Schema;
