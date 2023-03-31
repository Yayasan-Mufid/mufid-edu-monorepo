import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutApplied_groupsInputObjectSchema } from './UserCreateWithoutApplied_groupsInput.schema';
import { UserUncheckedCreateWithoutApplied_groupsInputObjectSchema } from './UserUncheckedCreateWithoutApplied_groupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutApplied_groupsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutApplied_groupsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutApplied_groupsInputObjectSchema),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutApplied_groupsInputObjectSchema = Schema;
