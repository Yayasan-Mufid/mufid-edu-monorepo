import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetItemAvgOrderByAggregateInput> = z
  .object({
    score: z.lazy(() => SortOrderSchema).optional(),
    seq: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ExamSheetItemAvgOrderByAggregateInputObjectSchema = Schema;
