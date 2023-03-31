import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamAvgOrderByAggregateInput> = z
  .object({
    duration_hour: z.lazy(() => SortOrderSchema).optional(),
    weight: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const StudyGroupExamAvgOrderByAggregateInputObjectSchema = Schema;
