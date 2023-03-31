import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAnnouncementMinAggregateInputType> = z
  .object({
    announcement_id: z.literal(true).optional(),
    study_group_id: z.literal(true).optional(),
  })
  .strict();

export const StudyGroupAnnouncementMinAggregateInputObjectSchema = Schema;
