import { z } from 'zod';
import { UserCreateWithoutEnrolled_groupsInputObjectSchema } from './UserCreateWithoutEnrolled_groupsInput.schema';
import { UserUncheckedCreateWithoutEnrolled_groupsInputObjectSchema } from './UserUncheckedCreateWithoutEnrolled_groupsInput.schema';
import { UserCreateOrConnectWithoutEnrolled_groupsInputObjectSchema } from './UserCreateOrConnectWithoutEnrolled_groupsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutEnrolled_groupsInput> =
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutEnrolled_groupsInputObjectSchema =
  Schema;
