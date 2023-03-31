import { z } from 'zod';
import { RoleArgsObjectSchema } from './RoleArgs.schema';
import { PermissionArgsObjectSchema } from './PermissionArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RolePermissionSelect> = z
  .object({
    id: z.boolean().optional(),
    role: z.union([z.boolean(), z.lazy(() => RoleArgsObjectSchema)]).optional(),
    role_name: z.boolean().optional(),
    permission: z
      .union([z.boolean(), z.lazy(() => PermissionArgsObjectSchema)])
      .optional(),
    permission_name: z.boolean().optional(),
  })
  .strict();

export const RolePermissionSelectObjectSchema = Schema;
