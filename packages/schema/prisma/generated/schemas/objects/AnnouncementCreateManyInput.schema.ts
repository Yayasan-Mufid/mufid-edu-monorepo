import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnnouncementCreateManyInput> = z
  .object({
    id: z.string().optional(),
    created_by_id: z.string(),
    title: z.string(),
    text: z.string(),
    start_date: z.date(),
    end_date: z.date(),
    public: z.boolean().optional(),
  })
  .strict();

export const AnnouncementCreateManyInputObjectSchema = Schema;
