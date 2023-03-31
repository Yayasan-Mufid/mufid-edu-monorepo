import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ModuleCountOrderByAggregateInputObjectSchema } from './ModuleCountOrderByAggregateInput.schema';
import { ModuleAvgOrderByAggregateInputObjectSchema } from './ModuleAvgOrderByAggregateInput.schema';
import { ModuleMaxOrderByAggregateInputObjectSchema } from './ModuleMaxOrderByAggregateInput.schema';
import { ModuleMinOrderByAggregateInputObjectSchema } from './ModuleMinOrderByAggregateInput.schema';
import { ModuleSumOrderByAggregateInputObjectSchema } from './ModuleSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    program_id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    code: z.lazy(() => SortOrderSchema).optional(),
    slug: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    published: z.lazy(() => SortOrderSchema).optional(),
    archived: z.lazy(() => SortOrderSchema).optional(),
    seq: z.lazy(() => SortOrderSchema).optional(),
    cover_img_url: z.lazy(() => SortOrderSchema).optional(),
    bg_img_url: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ModuleCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => ModuleAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ModuleMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ModuleMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ModuleSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ModuleOrderByWithAggregationInputObjectSchema = Schema;
