import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { StudyGroupAnnouncementCountOrderByAggregateInputObjectSchema } from './StudyGroupAnnouncementCountOrderByAggregateInput.schema';
import { StudyGroupAnnouncementMaxOrderByAggregateInputObjectSchema } from './StudyGroupAnnouncementMaxOrderByAggregateInput.schema';
import { StudyGroupAnnouncementMinOrderByAggregateInputObjectSchema } from './StudyGroupAnnouncementMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAnnouncementOrderByWithAggregationInput> =
  z
    .object({
      announcement_id: z.lazy(() => SortOrderSchema).optional(),
      study_group_id: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(
          () => StudyGroupAnnouncementCountOrderByAggregateInputObjectSchema,
        )
        .optional(),
      _max: z
        .lazy(() => StudyGroupAnnouncementMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => StudyGroupAnnouncementMinOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();

export const StudyGroupAnnouncementOrderByWithAggregationInputObjectSchema =
  Schema;
