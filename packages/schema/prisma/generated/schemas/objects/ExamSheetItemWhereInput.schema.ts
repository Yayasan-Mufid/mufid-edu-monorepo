import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { ExamSheetSectionRelationFilterObjectSchema } from './ExamSheetSectionRelationFilter.schema';
import { ExamSheetSectionWhereInputObjectSchema } from './ExamSheetSectionWhereInput.schema';
import { QuestionRelationFilterObjectSchema } from './QuestionRelationFilter.schema';
import { QuestionWhereInputObjectSchema } from './QuestionWhereInput.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetItemWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ExamSheetItemWhereInputObjectSchema),
        z.lazy(() => ExamSheetItemWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ExamSheetItemWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ExamSheetItemWhereInputObjectSchema),
        z.lazy(() => ExamSheetItemWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    section_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    section: z
      .union([
        z.lazy(() => ExamSheetSectionRelationFilterObjectSchema),
        z.lazy(() => ExamSheetSectionWhereInputObjectSchema),
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
    choices_id: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    answer: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    score: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    graded_note: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    graded_at: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    graded_by_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    graded_by: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    seq: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
  })
  .strict();

export const ExamSheetItemWhereInputObjectSchema = Schema;
