import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProgramAdminCountOrderByAggregateInputObjectSchema } from './ProgramAdminCountOrderByAggregateInput.schema';
import { ProgramAdminMaxOrderByAggregateInputObjectSchema } from './ProgramAdminMaxOrderByAggregateInput.schema';
import { ProgramAdminMinOrderByAggregateInputObjectSchema } from './ProgramAdminMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramAdminOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    program_id: z.lazy(() => SortOrderSchema).optional(),
    assigned_at: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ProgramAdminCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ProgramAdminMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ProgramAdminMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProgramAdminOrderByWithAggregationInputObjectSchema = Schema;
