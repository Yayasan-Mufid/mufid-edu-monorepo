import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnnouncementCreateManyCreated_byInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    text: z.string(),
    start_date: z.date(),
    end_date: z.date(),
    public: z.boolean().optional(),
  })
  .strict();

export const AnnouncementCreateManyCreated_byInputObjectSchema = Schema;
