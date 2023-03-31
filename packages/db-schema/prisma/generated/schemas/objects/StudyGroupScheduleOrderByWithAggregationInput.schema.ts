import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { StudyGroupScheduleCountOrderByAggregateInputObjectSchema } from './StudyGroupScheduleCountOrderByAggregateInput.schema';
import { StudyGroupScheduleMaxOrderByAggregateInputObjectSchema } from './StudyGroupScheduleMaxOrderByAggregateInput.schema';
import { StudyGroupScheduleMinOrderByAggregateInputObjectSchema } from './StudyGroupScheduleMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupScheduleOrderByWithAggregationInput> =
  z
    .object({
      study_group_id: z.lazy(() => SortOrderSchema).optional(),
      module_item_id: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => StudyGroupScheduleCountOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => StudyGroupScheduleMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => StudyGroupScheduleMinOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();

export const StudyGroupScheduleOrderByWithAggregationInputObjectSchema = Schema;
