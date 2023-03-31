import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ModuleItemQuestionCountOrderByAggregateInputObjectSchema } from './ModuleItemQuestionCountOrderByAggregateInput.schema';
import { ModuleItemQuestionMaxOrderByAggregateInputObjectSchema } from './ModuleItemQuestionMaxOrderByAggregateInput.schema';
import { ModuleItemQuestionMinOrderByAggregateInputObjectSchema } from './ModuleItemQuestionMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      module_item_id: z.lazy(() => SortOrderSchema).optional(),
      question_id: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => ModuleItemQuestionCountOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => ModuleItemQuestionMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => ModuleItemQuestionMinOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();

export const ModuleItemQuestionOrderByWithAggregationInputObjectSchema = Schema;
