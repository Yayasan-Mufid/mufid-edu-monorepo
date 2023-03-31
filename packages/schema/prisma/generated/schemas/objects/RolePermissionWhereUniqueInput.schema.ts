import { z } from 'zod';
import { RolePermissionRole_namePermission_nameCompoundUniqueInputObjectSchema } from './RolePermissionRole_namePermission_nameCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RolePermissionWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    role_name_permission_name: z
      .lazy(
        () =>
          RolePermissionRole_namePermission_nameCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const RolePermissionWhereUniqueInputObjectSchema = Schema;
