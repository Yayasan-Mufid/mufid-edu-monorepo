import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ModuleItemQuestionStatusCountOrderByAggregateInputObjectSchema } from './ModuleItemQuestionStatusCountOrderByAggregateInput.schema';
import { ModuleItemQuestionStatusMaxOrderByAggregateInputObjectSchema } from './ModuleItemQuestionStatusMaxOrderByAggregateInput.schema';
import { ModuleItemQuestionStatusMinOrderByAggregateInputObjectSchema } from './ModuleItemQuestionStatusMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionStatusOrderByWithAggregationInput> =
  z
    .object({
      question_id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      status: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(
          () => ModuleItemQuestionStatusCountOrderByAggregateInputObjectSchema,
        )
        .optional(),
      _max: z
        .lazy(
          () => ModuleItemQuestionStatusMaxOrderByAggregateInputObjectSchema,
        )
        .optional(),
      _min: z
        .lazy(
          () => ModuleItemQuestionStatusMinOrderByAggregateInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ModuleItemQuestionStatusOrderByWithAggregationInputObjectSchema =
  Schema;
