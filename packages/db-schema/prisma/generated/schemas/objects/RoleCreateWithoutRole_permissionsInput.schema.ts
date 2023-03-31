import { z } from 'zod';
import { UserRoleCreateNestedManyWithoutRoleInputObjectSchema } from './UserRoleCreateNestedManyWithoutRoleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleCreateWithoutRole_permissionsInput> = z
  .object({
    role: z.string(),
    description: z.string().optional().nullable(),
    user_roles: z
      .lazy(() => UserRoleCreateNestedManyWithoutRoleInputObjectSchema)
      .optional(),
  })
  .strict();

export const RoleCreateWithoutRole_permissionsInputObjectSchema = Schema;
