import { z } from 'zod';
import { QuestionCreateNestedOneWithoutExam_itemsInputObjectSchema } from './QuestionCreateNestedOneWithoutExam_itemsInput.schema';
import { UserCreateNestedOneWithoutGraded_exam_itemInputObjectSchema } from './UserCreateNestedOneWithoutGraded_exam_itemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetItemCreateWithoutSectionInput> = z
  .object({
    id: z.string().optional(),
    choices_id: z.string().optional().nullable(),
    answer: z.string().optional().nullable(),
    score: z.number().optional().nullable(),
    graded_note: z.string().optional().nullable(),
    graded_at: z.date().optional().nullable(),
    seq: z.number(),
    question: z.lazy(
      () => QuestionCreateNestedOneWithoutExam_itemsInputObjectSchema,
    ),
    graded_by: z
      .lazy(() => UserCreateNestedOneWithoutGraded_exam_itemInputObjectSchema)
      .optional(),
  })
  .strict();

export const ExamSheetItemCreateWithoutSectionInputObjectSchema = Schema;
