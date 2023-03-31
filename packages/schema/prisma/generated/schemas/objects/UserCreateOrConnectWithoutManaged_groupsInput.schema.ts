import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutManaged_groupsInputObjectSchema } from './UserCreateWithoutManaged_groupsInput.schema';
import { UserUncheckedCreateWithoutManaged_groupsInputObjectSchema } from './UserUncheckedCreateWithoutManaged_groupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutManaged_groupsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutManaged_groupsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutManaged_groupsInputObjectSchema),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutManaged_groupsInputObjectSchema = Schema;
