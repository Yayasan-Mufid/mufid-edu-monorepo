import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RolePermissionCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    role_name: z.literal(true).optional(),
    permission_name: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const RolePermissionCountAggregateInputObjectSchema = Schema;
