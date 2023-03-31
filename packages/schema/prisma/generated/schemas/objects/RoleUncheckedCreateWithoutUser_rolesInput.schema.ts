import { z } from 'zod';
import { RolePermissionUncheckedCreateNestedManyWithoutRoleInputObjectSchema } from './RolePermissionUncheckedCreateNestedManyWithoutRoleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUncheckedCreateWithoutUser_rolesInput> = z
  .object({
    role: z.string(),
    description: z.string().optional().nullable(),
    role_permissions: z
      .lazy(
        () =>
          RolePermissionUncheckedCreateNestedManyWithoutRoleInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const RoleUncheckedCreateWithoutUser_rolesInputObjectSchema = Schema;
