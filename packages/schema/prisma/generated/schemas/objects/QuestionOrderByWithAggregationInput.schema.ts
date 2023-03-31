import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { QuestionCountOrderByAggregateInputObjectSchema } from './QuestionCountOrderByAggregateInput.schema';
import { QuestionAvgOrderByAggregateInputObjectSchema } from './QuestionAvgOrderByAggregateInput.schema';
import { QuestionMaxOrderByAggregateInputObjectSchema } from './QuestionMaxOrderByAggregateInput.schema';
import { QuestionMinOrderByAggregateInputObjectSchema } from './QuestionMinOrderByAggregateInput.schema';
import { QuestionSumOrderByAggregateInputObjectSchema } from './QuestionSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    program_id: z.lazy(() => SortOrderSchema).optional(),
    module_id: z.lazy(() => SortOrderSchema).optional(),
    text: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    grading_hint: z.lazy(() => SortOrderSchema).optional(),
    max_score: z.lazy(() => SortOrderSchema).optional(),
    randomize_choices: z.lazy(() => SortOrderSchema).optional(),
    created_by_id: z.lazy(() => SortOrderSchema).optional(),
    validated_by_id: z.lazy(() => SortOrderSchema).optional(),
    validator_note: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    validated_at: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => QuestionCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => QuestionAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => QuestionMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => QuestionMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => QuestionSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const QuestionOrderByWithAggregationInputObjectSchema = Schema;
