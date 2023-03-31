import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetCreateManyUserInput> = z
  .object({
    id: z.string().optional(),
    group_exam_id: z.string(),
    grader_id: z.string().optional().nullable(),
    status: z.string().optional(),
    start_time: z.date().optional().nullable(),
    end_time: z.date().optional().nullable(),
    graded_at: z.date().optional().nullable(),
    grader_notes: z.string().optional().nullable(),
    score: z.number().optional().nullable(),
    token_text: z.string().optional().nullable(),
  })
  .strict();

export const ExamSheetCreateManyUserInputObjectSchema = Schema;
