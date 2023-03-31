import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ExamSheetItemCountOrderByAggregateInputObjectSchema } from './ExamSheetItemCountOrderByAggregateInput.schema';
import { ExamSheetItemAvgOrderByAggregateInputObjectSchema } from './ExamSheetItemAvgOrderByAggregateInput.schema';
import { ExamSheetItemMaxOrderByAggregateInputObjectSchema } from './ExamSheetItemMaxOrderByAggregateInput.schema';
import { ExamSheetItemMinOrderByAggregateInputObjectSchema } from './ExamSheetItemMinOrderByAggregateInput.schema';
import { ExamSheetItemSumOrderByAggregateInputObjectSchema } from './ExamSheetItemSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetItemOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    section_id: z.lazy(() => SortOrderSchema).optional(),
    question_id: z.lazy(() => SortOrderSchema).optional(),
    choices_id: z.lazy(() => SortOrderSchema).optional(),
    answer: z.lazy(() => SortOrderSchema).optional(),
    score: z.lazy(() => SortOrderSchema).optional(),
    graded_note: z.lazy(() => SortOrderSchema).optional(),
    graded_at: z.lazy(() => SortOrderSchema).optional(),
    graded_by_id: z.lazy(() => SortOrderSchema).optional(),
    seq: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ExamSheetItemCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => ExamSheetItemAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ExamSheetItemMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ExamSheetItemMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => ExamSheetItemSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ExamSheetItemOrderByWithAggregationInputObjectSchema = Schema;
