import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ExamSectionQuestionCountOrderByAggregateInputObjectSchema } from './ExamSectionQuestionCountOrderByAggregateInput.schema';
import { ExamSectionQuestionAvgOrderByAggregateInputObjectSchema } from './ExamSectionQuestionAvgOrderByAggregateInput.schema';
import { ExamSectionQuestionMaxOrderByAggregateInputObjectSchema } from './ExamSectionQuestionMaxOrderByAggregateInput.schema';
import { ExamSectionQuestionMinOrderByAggregateInputObjectSchema } from './ExamSectionQuestionMinOrderByAggregateInput.schema';
import { ExamSectionQuestionSumOrderByAggregateInputObjectSchema } from './ExamSectionQuestionSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionQuestionOrderByWithAggregationInput> =
  z
    .object({
      section_id: z.lazy(() => SortOrderSchema).optional(),
      question_id: z.lazy(() => SortOrderSchema).optional(),
      min_score: z.lazy(() => SortOrderSchema).optional(),
      max_scrore: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => ExamSectionQuestionCountOrderByAggregateInputObjectSchema)
        .optional(),
      _avg: z
        .lazy(() => ExamSectionQuestionAvgOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => ExamSectionQuestionMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => ExamSectionQuestionMinOrderByAggregateInputObjectSchema)
        .optional(),
      _sum: z
        .lazy(() => ExamSectionQuestionSumOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();

export const ExamSectionQuestionOrderByWithAggregationInputObjectSchema =
  Schema;
