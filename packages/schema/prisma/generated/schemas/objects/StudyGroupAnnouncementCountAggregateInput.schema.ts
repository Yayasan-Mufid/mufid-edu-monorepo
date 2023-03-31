import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAnnouncementCountAggregateInputType> =
  z
    .object({
      announcement_id: z.literal(true).optional(),
      study_group_id: z.literal(true).optional(),
      _all: z.literal(true).optional(),
    })
    .strict();

export const StudyGroupAnnouncementCountAggregateInputObjectSchema = Schema;
