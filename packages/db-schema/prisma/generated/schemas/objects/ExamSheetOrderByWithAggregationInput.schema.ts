import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ExamSheetCountOrderByAggregateInputObjectSchema } from './ExamSheetCountOrderByAggregateInput.schema';
import { ExamSheetAvgOrderByAggregateInputObjectSchema } from './ExamSheetAvgOrderByAggregateInput.schema';
import { ExamSheetMaxOrderByAggregateInputObjectSchema } from './ExamSheetMaxOrderByAggregateInput.schema';
import { ExamSheetMinOrderByAggregateInputObjectSchema } from './ExamSheetMinOrderByAggregateInput.schema';
import { ExamSheetSumOrderByAggregateInputObjectSchema } from './ExamSheetSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    group_exam_id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    grader_id: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    start_time: z.lazy(() => SortOrderSchema).optional(),
    end_time: z.lazy(() => SortOrderSchema).optional(),
    graded_at: z.lazy(() => SortOrderSchema).optional(),
    grader_notes: z.lazy(() => SortOrderSchema).optional(),
    score: z.lazy(() => SortOrderSchema).optional(),
    token_text: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ExamSheetCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => ExamSheetAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ExamSheetMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ExamSheetMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => ExamSheetSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ExamSheetOrderByWithAggregationInputObjectSchema = Schema;
