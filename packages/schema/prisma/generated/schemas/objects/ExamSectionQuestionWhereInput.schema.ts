import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { ExamSectionRelationFilterObjectSchema } from './ExamSectionRelationFilter.schema';
import { ExamSectionWhereInputObjectSchema } from './ExamSectionWhereInput.schema';
import { QuestionRelationFilterObjectSchema } from './QuestionRelationFilter.schema';
import { QuestionWhereInputObjectSchema } from './QuestionWhereInput.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionQuestionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ExamSectionQuestionWhereInputObjectSchema),
        z.lazy(() => ExamSectionQuestionWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ExamSectionQuestionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ExamSectionQuestionWhereInputObjectSchema),
        z.lazy(() => ExamSectionQuestionWhereInputObjectSchema).array(),
      ])
      .optional(),
    section_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    section: z
      .union([
        z.lazy(() => ExamSectionRelationFilterObjectSchema),
        z.lazy(() => ExamSectionWhereInputObjectSchema),
      ])
      .optional(),
    question_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    question: z
      .union([
        z.lazy(() => QuestionRelationFilterObjectSchema),
        z.lazy(() => QuestionWhereInputObjectSchema),
      ])
      .optional(),
    min_score: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    max_scrore: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const ExamSectionQuestionWhereInputObjectSchema = Schema;
