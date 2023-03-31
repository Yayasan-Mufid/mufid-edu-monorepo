import { z } from 'zod';
import { UserCreateWithoutManaged_groupsInputObjectSchema } from './UserCreateWithoutManaged_groupsInput.schema';
import { UserUncheckedCreateWithoutManaged_groupsInputObjectSchema } from './UserUncheckedCreateWithoutManaged_groupsInput.schema';
import { UserCreateOrConnectWithoutManaged_groupsInputObjectSchema } from './UserCreateOrConnectWithoutManaged_groupsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutManaged_groupsInput> =
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutManaged_groupsInputObjectSchema = Schema;
