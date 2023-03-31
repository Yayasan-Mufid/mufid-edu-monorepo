import { z } from 'zod';
import { RoleCreateNestedOneWithoutRole_permissionsInputObjectSchema } from './RoleCreateNestedOneWithoutRole_permissionsInput.schema';
import { PermissionCreateNestedOneWithoutRole_permissionsInputObjectSchema } from './PermissionCreateNestedOneWithoutRole_permissionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RolePermissionCreateInput> = z
  .object({
    id: z.string().optional(),
    role: z.lazy(
      () => RoleCreateNestedOneWithoutRole_permissionsInputObjectSchema,
    ),
    permission: z.lazy(
      () => PermissionCreateNestedOneWithoutRole_permissionsInputObjectSchema,
    ),
  })
  .strict();

export const RolePermissionCreateInputObjectSchema = Schema;
