import { z } from 'zod';
import { ExamSheetSectionCreateNestedOneWithoutItemsInputObjectSchema } from './ExamSheetSectionCreateNestedOneWithoutItemsInput.schema';
import { QuestionCreateNestedOneWithoutExam_itemsInputObjectSchema } from './QuestionCreateNestedOneWithoutExam_itemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetItemCreateWithoutGraded_byInput> = z
  .object({
    id: z.string().optional(),
    section: z.lazy(
      () => ExamSheetSectionCreateNestedOneWithoutItemsInputObjectSchema,
    ),
    question: z.lazy(
      () => QuestionCreateNestedOneWithoutExam_itemsInputObjectSchema,
    ),
    choices_id: z.string().optional().nullable(),
    answer: z.string().optional().nullable(),
    score: z.number().optional().nullable(),
    graded_note: z.string().optional().nullable(),
    graded_at: z.date().optional().nullable(),
    seq: z.number(),
  })
  .strict();

export const ExamSheetItemCreateWithoutGraded_byInputObjectSchema = Schema;
