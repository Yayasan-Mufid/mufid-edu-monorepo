import { z } from 'zod';
import { ExamSheetSectionCreateNestedOneWithoutItemsInputObjectSchema } from './ExamSheetSectionCreateNestedOneWithoutItemsInput.schema';
import { UserCreateNestedOneWithoutGraded_exam_itemInputObjectSchema } from './UserCreateNestedOneWithoutGraded_exam_itemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetItemCreateWithoutQuestionInput> = z
  .object({
    id: z.string().optional(),
    choices_id: z.string().optional().nullable(),
    answer: z.string().optional().nullable(),
    score: z.number().optional().nullable(),
    graded_note: z.string().optional().nullable(),
    graded_at: z.date().optional().nullable(),
    seq: z.number(),
    section: z.lazy(
      () => ExamSheetSectionCreateNestedOneWithoutItemsInputObjectSchema,
    ),
    graded_by: z
      .lazy(() => UserCreateNestedOneWithoutGraded_exam_itemInputObjectSchema)
      .optional(),
  })
  .strict();

export const ExamSheetItemCreateWithoutQuestionInputObjectSchema = Schema;
