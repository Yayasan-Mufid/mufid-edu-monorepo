import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupScheduleCountAggregateInputType> = z
  .object({
    study_group_id: z.literal(true).optional(),
    module_item_id: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const StudyGroupScheduleCountAggregateInputObjectSchema = Schema;
