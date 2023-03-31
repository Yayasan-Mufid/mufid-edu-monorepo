import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { RoleRelationFilterObjectSchema } from './RoleRelationFilter.schema';
import { RoleWhereInputObjectSchema } from './RoleWhereInput.schema';
import { PermissionRelationFilterObjectSchema } from './PermissionRelationFilter.schema';
import { PermissionWhereInputObjectSchema } from './PermissionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RolePermissionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RolePermissionWhereInputObjectSchema),
        z.lazy(() => RolePermissionWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RolePermissionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RolePermissionWhereInputObjectSchema),
        z.lazy(() => RolePermissionWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    role: z
      .union([
        z.lazy(() => RoleRelationFilterObjectSchema),
        z.lazy(() => RoleWhereInputObjectSchema),
      ])
      .optional(),
    role_name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    permission: z
      .union([
        z.lazy(() => PermissionRelationFilterObjectSchema),
        z.lazy(() => PermissionWhereInputObjectSchema),
      ])
      .optional(),
    permission_name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const RolePermissionWhereInputObjectSchema = Schema;
