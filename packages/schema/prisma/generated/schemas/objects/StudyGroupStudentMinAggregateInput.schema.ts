import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupStudentMinAggregateInputType> = z
  .object({
    study_group_id: z.literal(true).optional(),
    user_id: z.literal(true).optional(),
  })
  .strict();

export const StudyGroupStudentMinAggregateInputObjectSchema = Schema;
