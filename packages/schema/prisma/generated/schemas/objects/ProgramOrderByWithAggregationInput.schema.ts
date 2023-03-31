import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProgramCountOrderByAggregateInputObjectSchema } from './ProgramCountOrderByAggregateInput.schema';
import { ProgramMaxOrderByAggregateInputObjectSchema } from './ProgramMaxOrderByAggregateInput.schema';
import { ProgramMinOrderByAggregateInputObjectSchema } from './ProgramMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    code: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    cover_img_url: z.lazy(() => SortOrderSchema).optional(),
    bg_img_url: z.lazy(() => SortOrderSchema).optional(),
    published: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ProgramCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => ProgramMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ProgramMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ProgramOrderByWithAggregationInputObjectSchema = Schema;
