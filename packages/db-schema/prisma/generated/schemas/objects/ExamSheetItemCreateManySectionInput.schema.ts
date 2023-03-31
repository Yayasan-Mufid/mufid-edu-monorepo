import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetItemCreateManySectionInput> = z
  .object({
    id: z.string().optional(),
    question_id: z.string(),
    choices_id: z.string().optional().nullable(),
    answer: z.string().optional().nullable(),
    score: z.number().optional().nullable(),
    graded_note: z.string().optional().nullable(),
    graded_at: z.date().optional().nullable(),
    graded_by_id: z.string(),
    seq: z.number(),
  })
  .strict();

export const ExamSheetItemCreateManySectionInputObjectSchema = Schema;
