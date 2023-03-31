import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { ExamRelationFilterObjectSchema } from './ExamRelationFilter.schema';
import { ExamWhereInputObjectSchema } from './ExamWhereInput.schema';
import { StudyGroupRelationFilterObjectSchema } from './StudyGroupRelationFilter.schema';
import { StudyGroupWhereInputObjectSchema } from './StudyGroupWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { ExamSheetListRelationFilterObjectSchema } from './ExamSheetListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => StudyGroupExamWhereInputObjectSchema),
        z.lazy(() => StudyGroupExamWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => StudyGroupExamWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => StudyGroupExamWhereInputObjectSchema),
        z.lazy(() => StudyGroupExamWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    exam_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    exam: z
      .union([
        z.lazy(() => ExamRelationFilterObjectSchema),
        z.lazy(() => ExamWhereInputObjectSchema),
      ])
      .optional(),
    group_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    group: z
      .union([
        z.lazy(() => StudyGroupRelationFilterObjectSchema),
        z.lazy(() => StudyGroupWhereInputObjectSchema),
      ])
      .optional(),
    start_time: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    end_time: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    duration_hour: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    weight: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    sheets: z.lazy(() => ExamSheetListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const StudyGroupExamWhereInputObjectSchema = Schema;
