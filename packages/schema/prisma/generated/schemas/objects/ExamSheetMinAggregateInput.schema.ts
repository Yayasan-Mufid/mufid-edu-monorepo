import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    group_exam_id: z.literal(true).optional(),
    user_id: z.literal(true).optional(),
    grader_id: z.literal(true).optional(),
    status: z.literal(true).optional(),
    start_time: z.literal(true).optional(),
    end_time: z.literal(true).optional(),
    graded_at: z.literal(true).optional(),
    grader_notes: z.literal(true).optional(),
    score: z.literal(true).optional(),
    token_text: z.literal(true).optional(),
  })
  .strict();

export const ExamSheetMinAggregateInputObjectSchema = Schema;
