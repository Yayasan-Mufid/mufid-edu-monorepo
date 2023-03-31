import { z } from 'zod';
import { UserRoleFindManySchema } from '../findManyUserRole.schema';
import { RolePermissionFindManySchema } from '../findManyRolePermission.schema';
import { RoleCountOutputTypeArgsObjectSchema } from './RoleCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleInclude> = z
  .object({
    user_roles: z
      .union([z.boolean(), z.lazy(() => UserRoleFindManySchema)])
      .optional(),
    role_permissions: z
      .union([z.boolean(), z.lazy(() => RolePermissionFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => RoleCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const RoleIncludeObjectSchema = Schema;
