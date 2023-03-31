import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { StudyGroupAdminCountOrderByAggregateInputObjectSchema } from './StudyGroupAdminCountOrderByAggregateInput.schema';
import { StudyGroupAdminMaxOrderByAggregateInputObjectSchema } from './StudyGroupAdminMaxOrderByAggregateInput.schema';
import { StudyGroupAdminMinOrderByAggregateInputObjectSchema } from './StudyGroupAdminMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAdminOrderByWithAggregationInput> = z
  .object({
    study_group_id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => StudyGroupAdminCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => StudyGroupAdminMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => StudyGroupAdminMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const StudyGroupAdminOrderByWithAggregationInputObjectSchema = Schema;
