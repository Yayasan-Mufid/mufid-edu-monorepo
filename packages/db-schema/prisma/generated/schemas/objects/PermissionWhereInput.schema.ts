import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { RolePermissionListRelationFilterObjectSchema } from './RolePermissionListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PermissionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PermissionWhereInputObjectSchema),
        z.lazy(() => PermissionWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PermissionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PermissionWhereInputObjectSchema),
        z.lazy(() => PermissionWhereInputObjectSchema).array(),
      ])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    role_permissions: z
      .lazy(() => RolePermissionListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const PermissionWhereInputObjectSchema = Schema;
