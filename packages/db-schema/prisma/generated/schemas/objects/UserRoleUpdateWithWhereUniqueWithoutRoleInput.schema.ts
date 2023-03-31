import { z } from 'zod';
import { UserRoleWhereUniqueInputObjectSchema } from './UserRoleWhereUniqueInput.schema';
import { UserRoleUpdateWithoutRoleInputObjectSchema } from './UserRoleUpdateWithoutRoleInput.schema';
import { UserRoleUncheckedUpdateWithoutRoleInputObjectSchema } from './UserRoleUncheckedUpdateWithoutRoleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoleUpdateWithWhereUniqueWithoutRoleInput> =
  z
    .object({
      where: z.lazy(() => UserRoleWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => UserRoleUpdateWithoutRoleInputObjectSchema),
        z.lazy(() => UserRoleUncheckedUpdateWithoutRoleInputObjectSchema),
      ]),
    })
    .strict();

export const UserRoleUpdateWithWhereUniqueWithoutRoleInputObjectSchema = Schema;
