import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ExamCountOrderByAggregateInputObjectSchema } from './ExamCountOrderByAggregateInput.schema';
import { ExamMaxOrderByAggregateInputObjectSchema } from './ExamMaxOrderByAggregateInput.schema';
import { ExamMinOrderByAggregateInputObjectSchema } from './ExamMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    code: z.lazy(() => SortOrderSchema).optional(),
    module_id: z.lazy(() => SortOrderSchema).optional(),
    rules: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => ExamCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ExamMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ExamMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ExamOrderByWithAggregationInputObjectSchema = Schema;
