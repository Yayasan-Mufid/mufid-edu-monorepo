import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RolePermissionRole_namePermission_nameCompoundUniqueInput> =
  z
    .object({
      role_name: z.string(),
      permission_name: z.string(),
    })
    .strict();

export const RolePermissionRole_namePermission_nameCompoundUniqueInputObjectSchema =
  Schema;
