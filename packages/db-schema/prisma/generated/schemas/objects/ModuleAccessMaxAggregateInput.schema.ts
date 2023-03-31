import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAccessMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    module_id: z.literal(true).optional(),
    user_id: z.literal(true).optional(),
    granted_on: z.literal(true).optional(),
  })
  .strict();

export const ModuleAccessMaxAggregateInputObjectSchema = Schema;
