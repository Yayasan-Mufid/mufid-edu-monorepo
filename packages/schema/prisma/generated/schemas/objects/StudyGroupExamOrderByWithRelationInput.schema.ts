import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ExamOrderByWithRelationInputObjectSchema } from './ExamOrderByWithRelationInput.schema';
import { StudyGroupOrderByWithRelationInputObjectSchema } from './StudyGroupOrderByWithRelationInput.schema';
import { ExamSheetOrderByRelationAggregateInputObjectSchema } from './ExamSheetOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    exam_id: z.lazy(() => SortOrderSchema).optional(),
    exam: z.lazy(() => ExamOrderByWithRelationInputObjectSchema).optional(),
    group_id: z.lazy(() => SortOrderSchema).optional(),
    group: z
      .lazy(() => StudyGroupOrderByWithRelationInputObjectSchema)
      .optional(),
    start_time: z.lazy(() => SortOrderSchema).optional(),
    end_time: z.lazy(() => SortOrderSchema).optional(),
    duration_hour: z.lazy(() => SortOrderSchema).optional(),
    weight: z.lazy(() => SortOrderSchema).optional(),
    sheets: z
      .lazy(() => ExamSheetOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const StudyGroupExamOrderByWithRelationInputObjectSchema = Schema;
