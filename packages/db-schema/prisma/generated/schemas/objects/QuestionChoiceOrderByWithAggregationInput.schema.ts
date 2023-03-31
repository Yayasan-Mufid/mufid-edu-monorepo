import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { QuestionChoiceCountOrderByAggregateInputObjectSchema } from './QuestionChoiceCountOrderByAggregateInput.schema';
import { QuestionChoiceAvgOrderByAggregateInputObjectSchema } from './QuestionChoiceAvgOrderByAggregateInput.schema';
import { QuestionChoiceMaxOrderByAggregateInputObjectSchema } from './QuestionChoiceMaxOrderByAggregateInput.schema';
import { QuestionChoiceMinOrderByAggregateInputObjectSchema } from './QuestionChoiceMinOrderByAggregateInput.schema';
import { QuestionChoiceSumOrderByAggregateInputObjectSchema } from './QuestionChoiceSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionChoiceOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    question_id: z.lazy(() => SortOrderSchema).optional(),
    text: z.lazy(() => SortOrderSchema).optional(),
    answer_key: z.lazy(() => SortOrderSchema).optional(),
    seq: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => QuestionChoiceCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => QuestionChoiceAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => QuestionChoiceMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => QuestionChoiceMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => QuestionChoiceSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const QuestionChoiceOrderByWithAggregationInputObjectSchema = Schema;
