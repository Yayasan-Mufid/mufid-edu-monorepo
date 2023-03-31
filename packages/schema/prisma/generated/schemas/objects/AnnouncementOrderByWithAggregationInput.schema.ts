import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AnnouncementCountOrderByAggregateInputObjectSchema } from './AnnouncementCountOrderByAggregateInput.schema';
import { AnnouncementMaxOrderByAggregateInputObjectSchema } from './AnnouncementMaxOrderByAggregateInput.schema';
import { AnnouncementMinOrderByAggregateInputObjectSchema } from './AnnouncementMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnnouncementOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    created_by_id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    text: z.lazy(() => SortOrderSchema).optional(),
    start_date: z.lazy(() => SortOrderSchema).optional(),
    end_date: z.lazy(() => SortOrderSchema).optional(),
    public: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => AnnouncementCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => AnnouncementMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => AnnouncementMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const AnnouncementOrderByWithAggregationInputObjectSchema = Schema;
