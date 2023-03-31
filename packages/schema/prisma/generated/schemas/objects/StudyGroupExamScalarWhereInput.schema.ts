import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => StudyGroupExamScalarWhereInputObjectSchema),
        z.lazy(() => StudyGroupExamScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => StudyGroupExamScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => StudyGroupExamScalarWhereInputObjectSchema),
        z.lazy(() => StudyGroupExamScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    exam_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    group_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
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
  })
  .strict();

export const StudyGroupExamScalarWhereInputObjectSchema = Schema;
