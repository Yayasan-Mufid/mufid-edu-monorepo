import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramAdminMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    user_id: z.literal(true).optional(),
    program_id: z.literal(true).optional(),
    assigned_at: z.literal(true).optional(),
  })
  .strict();

export const ProgramAdminMinAggregateInputObjectSchema = Schema;
