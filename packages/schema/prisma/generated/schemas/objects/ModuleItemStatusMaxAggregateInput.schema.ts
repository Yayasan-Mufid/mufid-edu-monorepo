import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemStatusMaxAggregateInputType> = z
  .object({
    module_item_id: z.literal(true).optional(),
    user_id: z.literal(true).optional(),
    status: z.literal(true).optional(),
    updated_at: z.literal(true).optional(),
  })
  .strict();

export const ModuleItemStatusMaxAggregateInputObjectSchema = Schema;
