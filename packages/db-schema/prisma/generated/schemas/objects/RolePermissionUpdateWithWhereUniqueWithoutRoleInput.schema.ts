import { z } from 'zod';
import { RolePermissionWhereUniqueInputObjectSchema } from './RolePermissionWhereUniqueInput.schema';
import { RolePermissionUpdateWithoutRoleInputObjectSchema } from './RolePermissionUpdateWithoutRoleInput.schema';
import { RolePermissionUncheckedUpdateWithoutRoleInputObjectSchema } from './RolePermissionUncheckedUpdateWithoutRoleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RolePermissionUpdateWithWhereUniqueWithoutRoleInput> =
  z
    .object({
      where: z.lazy(() => RolePermissionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => RolePermissionUpdateWithoutRoleInputObjectSchema),
        z.lazy(() => RolePermissionUncheckedUpdateWithoutRoleInputObjectSchema),
      ]),
    })
    .strict();

export const RolePermissionUpdateWithWhereUniqueWithoutRoleInputObjectSchema =
  Schema;
