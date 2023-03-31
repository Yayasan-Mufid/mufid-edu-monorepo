import { z } from 'zod';
import { RolePermissionCreateNestedManyWithoutRoleInputObjectSchema } from './RolePermissionCreateNestedManyWithoutRoleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleCreateWithoutUser_rolesInput> = z
  .object({
    role: z.string(),
    description: z.string().optional().nullable(),
    role_permissions: z
      .lazy(() => RolePermissionCreateNestedManyWithoutRoleInputObjectSchema)
      .optional(),
  })
  .strict();

export const RoleCreateWithoutUser_rolesInputObjectSchema = Schema;
