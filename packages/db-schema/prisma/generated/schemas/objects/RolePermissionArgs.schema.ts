import { z } from 'zod';
import { RolePermissionSelectObjectSchema } from './RolePermissionSelect.schema';
import { RolePermissionIncludeObjectSchema } from './RolePermissionInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RolePermissionArgs> = z
  .object({
    select: z.lazy(() => RolePermissionSelectObjectSchema).optional(),
    include: z.lazy(() => RolePermissionIncludeObjectSchema).optional(),
  })
  .strict();

export const RolePermissionArgsObjectSchema = Schema;
