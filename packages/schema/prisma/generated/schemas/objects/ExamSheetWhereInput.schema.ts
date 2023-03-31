import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StudyGroupExamRelationFilterObjectSchema } from './StudyGroupExamRelationFilter.schema';
import { StudyGroupExamWhereInputObjectSchema } from './StudyGroupExamWhereInput.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { ExamSheetSectionListRelationFilterObjectSchema } from './ExamSheetSectionListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ExamSheetWhereInputObjectSchema),
        z.lazy(() => ExamSheetWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ExamSheetWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ExamSheetWhereInputObjectSchema),
        z.lazy(() => ExamSheetWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    group_exam_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    group_exam: z
      .union([
        z.lazy(() => StudyGroupExamRelationFilterObjectSchema),
        z.lazy(() => StudyGroupExamWhereInputObjectSchema),
      ])
      .optional(),
    user_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    grader_id: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    grader: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    status: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    start_time: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    end_time: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    graded_at: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    grader_notes: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    score: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    sections: z
      .lazy(() => ExamSheetSectionListRelationFilterObjectSchema)
      .optional(),
    token_text: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict();

export const ExamSheetWhereInputObjectSchema = Schema;
