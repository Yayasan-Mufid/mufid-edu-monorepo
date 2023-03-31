import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { StudyGroupCountOrderByAggregateInputObjectSchema } from './StudyGroupCountOrderByAggregateInput.schema';
import { StudyGroupAvgOrderByAggregateInputObjectSchema } from './StudyGroupAvgOrderByAggregateInput.schema';
import { StudyGroupMaxOrderByAggregateInputObjectSchema } from './StudyGroupMaxOrderByAggregateInput.schema';
import { StudyGroupMinOrderByAggregateInputObjectSchema } from './StudyGroupMinOrderByAggregateInput.schema';
import { StudyGroupSumOrderByAggregateInputObjectSchema } from './StudyGroupSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    gender: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    code: z.lazy(() => SortOrderSchema).optional(),
    module_id: z.lazy(() => SortOrderSchema).optional(),
    capacity: z.lazy(() => SortOrderSchema).optional(),
    enrollment_start: z.lazy(() => SortOrderSchema).optional(),
    enrollment_end: z.lazy(() => SortOrderSchema).optional(),
    active_start: z.lazy(() => SortOrderSchema).optional(),
    active_end: z.lazy(() => SortOrderSchema).optional(),
    logo_url: z.lazy(() => SortOrderSchema).optional(),
    invoice_amount: z.lazy(() => SortOrderSchema).optional(),
    invoice_title: z.lazy(() => SortOrderSchema).optional(),
    invoice_account_id: z.lazy(() => SortOrderSchema).optional(),
    use_schedule: z.lazy(() => SortOrderSchema).optional(),
    application_note: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => StudyGroupCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => StudyGroupAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => StudyGroupMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => StudyGroupMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => StudyGroupSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const StudyGroupOrderByWithAggregationInputObjectSchema = Schema;
