import { z } from 'zod';
import { PermissionCreateNestedOneWithoutRole_permissionsInputObjectSchema } from './PermissionCreateNestedOneWithoutRole_permissionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RolePermissionCreateWithoutRoleInput> = z
  .object({
    id: z.string().optional(),
    permission: z.lazy(
      () => PermissionCreateNestedOneWithoutRole_permissionsInputObjectSchema,
    ),
  })
  .strict();

export const RolePermissionCreateWithoutRoleInputObjectSchema = Schema;
