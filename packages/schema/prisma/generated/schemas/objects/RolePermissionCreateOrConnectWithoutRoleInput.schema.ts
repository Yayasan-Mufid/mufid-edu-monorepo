import { z } from 'zod';
import { RolePermissionWhereUniqueInputObjectSchema } from './RolePermissionWhereUniqueInput.schema';
import { RolePermissionCreateWithoutRoleInputObjectSchema } from './RolePermissionCreateWithoutRoleInput.schema';
import { RolePermissionUncheckedCreateWithoutRoleInputObjectSchema } from './RolePermissionUncheckedCreateWithoutRoleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RolePermissionCreateOrConnectWithoutRoleInput> =
  z
    .object({
      where: z.lazy(() => RolePermissionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => RolePermissionCreateWithoutRoleInputObjectSchema),
        z.lazy(() => RolePermissionUncheckedCreateWithoutRoleInputObjectSchema),
      ]),
    })
    .strict();

export const RolePermissionCreateOrConnectWithoutRoleInputObjectSchema = Schema;
