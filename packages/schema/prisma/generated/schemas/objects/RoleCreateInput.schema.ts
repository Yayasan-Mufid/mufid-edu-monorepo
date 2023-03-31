import { z } from 'zod';
import { UserRoleCreateNestedManyWithoutRoleInputObjectSchema } from './UserRoleCreateNestedManyWithoutRoleInput.schema';
import { RolePermissionCreateNestedManyWithoutRoleInputObjectSchema } from './RolePermissionCreateNestedManyWithoutRoleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleCreateInput> = z
  .object({
    role: z.string(),
    description: z.string().optional().nullable(),
    user_roles: z
      .lazy(() => UserRoleCreateNestedManyWithoutRoleInputObjectSchema)
      .optional(),
    role_permissions: z
      .lazy(() => RolePermissionCreateNestedManyWithoutRoleInputObjectSchema)
      .optional(),
  })
  .strict();

export const RoleCreateInputObjectSchema = Schema;
