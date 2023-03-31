import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamCreateManyExamInput> = z
  .object({
    id: z.string().optional(),
    group_id: z.string(),
    start_time: z.date(),
    end_time: z.date(),
    duration_hour: z.number(),
    weight: z.number().optional().nullable(),
  })
  .strict();

export const StudyGroupExamCreateManyExamInputObjectSchema = Schema;
