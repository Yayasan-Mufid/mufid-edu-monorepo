import { z } from 'zod';
import { UserRoleWhereUniqueInputObjectSchema } from './UserRoleWhereUniqueInput.schema';
import { UserRoleUpdateWithoutRoleInputObjectSchema } from './UserRoleUpdateWithoutRoleInput.schema';
import { UserRoleUncheckedUpdateWithoutRoleInputObjectSchema } from './UserRoleUncheckedUpdateWithoutRoleInput.schema';
import { UserRoleCreateWithoutRoleInputObjectSchema } from './UserRoleCreateWithoutRoleInput.schema';
import { UserRoleUncheckedCreateWithoutRoleInputObjectSchema } from './UserRoleUncheckedCreateWithoutRoleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoleUpsertWithWhereUniqueWithoutRoleInput> =
  z
    .object({
      where: z.lazy(() => UserRoleWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => UserRoleUpdateWithoutRoleInputObjectSchema),
        z.lazy(() => UserRoleUncheckedUpdateWithoutRoleInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => UserRoleCreateWithoutRoleInputObjectSchema),
        z.lazy(() => UserRoleUncheckedCreateWithoutRoleInputObjectSchema),
      ]),
    })
    .strict();

export const UserRoleUpsertWithWhereUniqueWithoutRoleInputObjectSchema = Schema;
