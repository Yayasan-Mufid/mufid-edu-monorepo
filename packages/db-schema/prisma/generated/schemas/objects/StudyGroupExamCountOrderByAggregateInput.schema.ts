import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    exam_id: z.lazy(() => SortOrderSchema).optional(),
    group_id: z.lazy(() => SortOrderSchema).optional(),
    start_time: z.lazy(() => SortOrderSchema).optional(),
    end_time: z.lazy(() => SortOrderSchema).optional(),
    duration_hour: z.lazy(() => SortOrderSchema).optional(),
    weight: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const StudyGroupExamCountOrderByAggregateInputObjectSchema = Schema;
