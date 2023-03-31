import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetItemCreateManyGraded_byInput> = z
  .object({
    id: z.string().optional(),
    section_id: z.string(),
    question_id: z.string(),
    choices_id: z.string().optional().nullable(),
    answer: z.string().optional().nullable(),
    score: z.number().optional().nullable(),
    graded_note: z.string().optional().nullable(),
    graded_at: z.date().optional().nullable(),
    seq: z.number(),
  })
  .strict();

export const ExamSheetItemCreateManyGraded_byInputObjectSchema = Schema;
