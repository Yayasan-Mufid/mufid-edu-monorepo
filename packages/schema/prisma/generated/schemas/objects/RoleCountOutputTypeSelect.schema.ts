import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleCountOutputTypeSelect> = z
  .object({
    user_roles: z.boolean().optional(),
    role_permissions: z.boolean().optional(),
  })
  .strict();

export const RoleCountOutputTypeSelectObjectSchema = Schema;
