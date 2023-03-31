import { z } from 'zod';
import { RolePermissionWhereUniqueInputObjectSchema } from './RolePermissionWhereUniqueInput.schema';
import { RolePermissionUpdateWithoutRoleInputObjectSchema } from './RolePermissionUpdateWithoutRoleInput.schema';
import { RolePermissionUncheckedUpdateWithoutRoleInputObjectSchema } from './RolePermissionUncheckedUpdateWithoutRoleInput.schema';
import { RolePermissionCreateWithoutRoleInputObjectSchema } from './RolePermissionCreateWithoutRoleInput.schema';
import { RolePermissionUncheckedCreateWithoutRoleInputObjectSchema } from './RolePermissionUncheckedCreateWithoutRoleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RolePermissionUpsertWithWhereUniqueWithoutRoleInput> =
  z
    .object({
      where: z.lazy(() => RolePermissionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => RolePermissionUpdateWithoutRoleInputObjectSchema),
        z.lazy(() => RolePermissionUncheckedUpdateWithoutRoleInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => RolePermissionCreateWithoutRoleInputObjectSchema),
        z.lazy(() => RolePermissionUncheckedCreateWithoutRoleInputObjectSchema),
      ]),
    })
    .strict();

export const RolePermissionUpsertWithWhereUniqueWithoutRoleInputObjectSchema =
  Schema;
