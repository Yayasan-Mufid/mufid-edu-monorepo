import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnnouncementCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    created_by_id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    text: z.lazy(() => SortOrderSchema).optional(),
    start_date: z.lazy(() => SortOrderSchema).optional(),
    end_date: z.lazy(() => SortOrderSchema).optional(),
    public: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const AnnouncementCountOrderByAggregateInputObjectSchema = Schema;
