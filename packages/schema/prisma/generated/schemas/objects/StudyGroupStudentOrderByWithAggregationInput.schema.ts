import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { StudyGroupStudentCountOrderByAggregateInputObjectSchema } from './StudyGroupStudentCountOrderByAggregateInput.schema';
import { StudyGroupStudentMaxOrderByAggregateInputObjectSchema } from './StudyGroupStudentMaxOrderByAggregateInput.schema';
import { StudyGroupStudentMinOrderByAggregateInputObjectSchema } from './StudyGroupStudentMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupStudentOrderByWithAggregationInput> = z
  .object({
    study_group_id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => StudyGroupStudentCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => StudyGroupStudentMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => StudyGroupStudentMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const StudyGroupStudentOrderByWithAggregationInputObjectSchema = Schema;
