import { z } from 'zod';
import { RoleCreateNestedOneWithoutUser_rolesInputObjectSchema } from './RoleCreateNestedOneWithoutUser_rolesInput.schema';
import { UserCreateNestedOneWithoutRolesInputObjectSchema } from './UserCreateNestedOneWithoutRolesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoleCreateInput> = z
  .object({
    id: z.string().optional(),
    role: z.lazy(() => RoleCreateNestedOneWithoutUser_rolesInputObjectSchema),
    user: z.lazy(() => UserCreateNestedOneWithoutRolesInputObjectSchema),
  })
  .strict();

export const UserRoleCreateInputObjectSchema = Schema;
