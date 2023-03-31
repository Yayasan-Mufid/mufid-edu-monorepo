import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ExamSectionCountOrderByAggregateInputObjectSchema } from './ExamSectionCountOrderByAggregateInput.schema';
import { ExamSectionAvgOrderByAggregateInputObjectSchema } from './ExamSectionAvgOrderByAggregateInput.schema';
import { ExamSectionMaxOrderByAggregateInputObjectSchema } from './ExamSectionMaxOrderByAggregateInput.schema';
import { ExamSectionMinOrderByAggregateInputObjectSchema } from './ExamSectionMinOrderByAggregateInput.schema';
import { ExamSectionSumOrderByAggregateInputObjectSchema } from './ExamSectionSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    exam_id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    text: z.lazy(() => SortOrderSchema).optional(),
    randomize_questions: z.lazy(() => SortOrderSchema).optional(),
    nb_of_questions: z.lazy(() => SortOrderSchema).optional(),
    seq: z.lazy(() => SortOrderSchema).optional(),
    default_point: z.lazy(() => SortOrderSchema).optional(),
    weight: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ExamSectionCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => ExamSectionAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ExamSectionMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ExamSectionMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => ExamSectionSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ExamSectionOrderByWithAggregationInputObjectSchema = Schema;
