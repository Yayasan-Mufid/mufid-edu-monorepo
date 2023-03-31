import { z } from 'zod';
import { UserCreateWithoutApplied_groupsInputObjectSchema } from './UserCreateWithoutApplied_groupsInput.schema';
import { UserUncheckedCreateWithoutApplied_groupsInputObjectSchema } from './UserUncheckedCreateWithoutApplied_groupsInput.schema';
import { UserCreateOrConnectWithoutApplied_groupsInputObjectSchema } from './UserCreateOrConnectWithoutApplied_groupsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutApplied_groupsInput> =
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutApplied_groupsInputObjectSchema = Schema;
