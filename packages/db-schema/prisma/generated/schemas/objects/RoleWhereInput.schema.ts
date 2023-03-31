import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { UserRoleListRelationFilterObjectSchema } from './UserRoleListRelationFilter.schema';
import { RolePermissionListRelationFilterObjectSchema } from './RolePermissionListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RoleWhereInputObjectSchema),
        z.lazy(() => RoleWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RoleWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RoleWhereInputObjectSchema),
        z.lazy(() => RoleWhereInputObjectSchema).array(),
      ])
      .optional(),
    role: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    user_roles: z.lazy(() => UserRoleListRelationFilterObjectSchema).optional(),
    role_permissions: z
      .lazy(() => RolePermissionListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const RoleWhereInputObjectSchema = Schema;
