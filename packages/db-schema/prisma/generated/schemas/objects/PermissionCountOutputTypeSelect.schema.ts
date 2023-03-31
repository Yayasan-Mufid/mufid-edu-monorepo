import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PermissionCountOutputTypeSelect> = z
  .object({
    role_permissions: z.boolean().optional(),
  })
  .strict();

export const PermissionCountOutputTypeSelectObjectSchema = Schema;
