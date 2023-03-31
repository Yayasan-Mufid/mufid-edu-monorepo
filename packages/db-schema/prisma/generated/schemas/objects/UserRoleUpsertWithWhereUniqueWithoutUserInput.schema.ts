import { z } from 'zod';
import { UserRoleWhereUniqueInputObjectSchema } from './UserRoleWhereUniqueInput.schema';
import { UserRoleUpdateWithoutUserInputObjectSchema } from './UserRoleUpdateWithoutUserInput.schema';
import { UserRoleUncheckedUpdateWithoutUserInputObjectSchema } from './UserRoleUncheckedUpdateWithoutUserInput.schema';
import { UserRoleCreateWithoutUserInputObjectSchema } from './UserRoleCreateWithoutUserInput.schema';
import { UserRoleUncheckedCreateWithoutUserInputObjectSchema } from './UserRoleUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoleUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => UserRoleWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => UserRoleUpdateWithoutUserInputObjectSchema),
        z.lazy(() => UserRoleUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => UserRoleCreateWithoutUserInputObjectSchema),
        z.lazy(() => UserRoleUncheckedCreateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const UserRoleUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
