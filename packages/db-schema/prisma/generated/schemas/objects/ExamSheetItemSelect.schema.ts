import { z } from 'zod';
import { ExamSheetSectionArgsObjectSchema } from './ExamSheetSectionArgs.schema';
import { QuestionArgsObjectSchema } from './QuestionArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetItemSelect> = z
  .object({
    id: z.boolean().optional(),
    section_id: z.boolean().optional(),
    section: z
      .union([z.boolean(), z.lazy(() => ExamSheetSectionArgsObjectSchema)])
      .optional(),
    question_id: z.boolean().optional(),
    question: z
      .union([z.boolean(), z.lazy(() => QuestionArgsObjectSchema)])
      .optional(),
    choices_id: z.boolean().optional(),
    answer: z.boolean().optional(),
    score: z.boolean().optional(),
    graded_note: z.boolean().optional(),
    graded_at: z.boolean().optional(),
    graded_by_id: z.boolean().optional(),
    graded_by: z
      .union([z.boolean(), z.lazy(() => UserArgsObjectSchema)])
      .optional(),
    seq: z.boolean().optional(),
  })
  .strict();

export const ExamSheetItemSelectObjectSchema = Schema;
