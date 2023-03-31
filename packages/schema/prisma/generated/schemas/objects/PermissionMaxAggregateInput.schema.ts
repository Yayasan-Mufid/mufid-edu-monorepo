import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PermissionMaxAggregateInputType> = z
  .object({
    name: z.literal(true).optional(),
    description: z.literal(true).optional(),
  })
  .strict();

export const PermissionMaxAggregateInputObjectSchema = Schema;
