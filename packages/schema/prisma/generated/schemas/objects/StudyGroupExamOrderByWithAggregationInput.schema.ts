import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { StudyGroupExamCountOrderByAggregateInputObjectSchema } from './StudyGroupExamCountOrderByAggregateInput.schema';
import { StudyGroupExamAvgOrderByAggregateInputObjectSchema } from './StudyGroupExamAvgOrderByAggregateInput.schema';
import { StudyGroupExamMaxOrderByAggregateInputObjectSchema } from './StudyGroupExamMaxOrderByAggregateInput.schema';
import { StudyGroupExamMinOrderByAggregateInputObjectSchema } from './StudyGroupExamMinOrderByAggregateInput.schema';
import { StudyGroupExamSumOrderByAggregateInputObjectSchema } from './StudyGroupExamSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    exam_id: z.lazy(() => SortOrderSchema).optional(),
    group_id: z.lazy(() => SortOrderSchema).optional(),
    start_time: z.lazy(() => SortOrderSchema).optional(),
    end_time: z.lazy(() => SortOrderSchema).optional(),
    duration_hour: z.lazy(() => SortOrderSchema).optional(),
    weight: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => StudyGroupExamCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => StudyGroupExamAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => StudyGroupExamMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => StudyGroupExamMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => StudyGroupExamSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const StudyGroupExamOrderByWithAggregationInputObjectSchema = Schema;
