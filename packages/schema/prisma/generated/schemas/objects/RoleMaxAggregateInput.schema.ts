import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleMaxAggregateInputType> = z
  .object({
    role: z.literal(true).optional(),
    description: z.literal(true).optional(),
  })
  .strict();

export const RoleMaxAggregateInputObjectSchema = Schema;
