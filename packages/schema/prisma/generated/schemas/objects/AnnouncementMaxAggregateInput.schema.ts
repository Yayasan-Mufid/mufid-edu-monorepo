import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnnouncementMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    created_by_id: z.literal(true).optional(),
    title: z.literal(true).optional(),
    text: z.literal(true).optional(),
    start_date: z.literal(true).optional(),
    end_date: z.literal(true).optional(),
    public: z.literal(true).optional(),
  })
  .strict();

export const AnnouncementMaxAggregateInputObjectSchema = Schema;
