import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetItemCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    section_id: z.literal(true).optional(),
    question_id: z.literal(true).optional(),
    choices_id: z.literal(true).optional(),
    answer: z.literal(true).optional(),
    score: z.literal(true).optional(),
    graded_note: z.literal(true).optional(),
    graded_at: z.literal(true).optional(),
    graded_by_id: z.literal(true).optional(),
    seq: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ExamSheetItemCountAggregateInputObjectSchema = Schema;
