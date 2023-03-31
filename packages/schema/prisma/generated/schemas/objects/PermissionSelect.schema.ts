import { z } from 'zod';
import { RolePermissionFindManySchema } from '../findManyRolePermission.schema';
import { PermissionCountOutputTypeArgsObjectSchema } from './PermissionCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PermissionSelect> = z
  .object({
    name: z.boolean().optional(),
    description: z.boolean().optional(),
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

export const PermissionSelectObjectSchema = Schema;
