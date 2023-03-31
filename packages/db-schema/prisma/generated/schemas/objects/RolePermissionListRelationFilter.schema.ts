import { z } from 'zod';
import { RolePermissionWhereInputObjectSchema } from './RolePermissionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RolePermissionListRelationFilter> = z
  .object({
    every: z.lazy(() => RolePermissionWhereInputObjectSchema).optional(),
    some: z.lazy(() => RolePermissionWhereInputObjectSchema).optional(),
    none: z.lazy(() => RolePermissionWhereInputObjectSchema).optional(),
  })
  .strict();

export const RolePermissionListRelationFilterObjectSchema = Schema;
