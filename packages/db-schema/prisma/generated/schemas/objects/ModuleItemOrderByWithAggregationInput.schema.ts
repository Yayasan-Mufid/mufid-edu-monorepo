import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ModuleItemCountOrderByAggregateInputObjectSchema } from './ModuleItemCountOrderByAggregateInput.schema';
import { ModuleItemAvgOrderByAggregateInputObjectSchema } from './ModuleItemAvgOrderByAggregateInput.schema';
import { ModuleItemMaxOrderByAggregateInputObjectSchema } from './ModuleItemMaxOrderByAggregateInput.schema';
import { ModuleItemMinOrderByAggregateInputObjectSchema } from './ModuleItemMinOrderByAggregateInput.schema';
import { ModuleItemSumOrderByAggregateInputObjectSchema } from './ModuleItemSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    module_id: z.lazy(() => SortOrderSchema).optional(),
    parent_item_id: z.lazy(() => SortOrderSchema).optional(),
    is_root: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    code: z.lazy(() => SortOrderSchema).optional(),
    text: z.lazy(() => SortOrderSchema).optional(),
    seq: z.lazy(() => SortOrderSchema).optional(),
    is_quiz: z.lazy(() => SortOrderSchema).optional(),
    mandatory: z.lazy(() => SortOrderSchema).optional(),
    cover_img_url: z.lazy(() => SortOrderSchema).optional(),
    bg_img_url: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ModuleItemCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => ModuleItemAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ModuleItemMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ModuleItemMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => ModuleItemSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ModuleItemOrderByWithAggregationInputObjectSchema = Schema;
