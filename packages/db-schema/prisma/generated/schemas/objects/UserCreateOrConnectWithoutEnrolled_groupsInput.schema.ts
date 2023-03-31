import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutEnrolled_groupsInputObjectSchema } from './UserCreateWithoutEnrolled_groupsInput.schema';
import { UserUncheckedCreateWithoutEnrolled_groupsInputObjectSchema } from './UserUncheckedCreateWithoutEnrolled_groupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutEnrolled_groupsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutEnrolled_groupsInputObjectSchema),
        z.lazy(
          () => UserUncheckedCreateWithoutEnrolled_groupsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutEnrolled_groupsInputObjectSchema =
  Schema;
