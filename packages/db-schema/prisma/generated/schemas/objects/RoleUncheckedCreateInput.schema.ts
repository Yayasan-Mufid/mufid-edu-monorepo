import { z } from 'zod';
import { UserRoleUncheckedCreateNestedManyWithoutRoleInputObjectSchema } from './UserRoleUncheckedCreateNestedManyWithoutRoleInput.schema';
import { RolePermissionUncheckedCreateNestedManyWithoutRoleInputObjectSchema } from './RolePermissionUncheckedCreateNestedManyWithoutRoleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUncheckedCreateInput> = z
  .object({
    role: z.string(),
    description: z.string().optional().nullable(),
    user_roles: z
      .lazy(() => UserRoleUncheckedCreateNestedManyWithoutRoleInputObjectSchema)
      .optional(),
    role_permissions: z
      .lazy(
        () =>
          RolePermissionUncheckedCreateNestedManyWithoutRoleInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const RoleUncheckedCreateInputObjectSchema = Schema;
