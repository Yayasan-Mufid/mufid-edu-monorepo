import { z } from 'zod';
import { RolePermissionFindManySchema } from '../findManyRolePermission.schema';
import { PermissionCountOutputTypeArgsObjectSchema } from './PermissionCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PermissionInclude> = z
  .object({
    role_permissions: z
      .union([z.boolean(), z.lazy(() => RolePermissionFindManySchema)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => PermissionCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const PermissionIncludeObjectSchema = Schema;
