import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetAvgOrderByAggregateInput> = z
  .object({
    score: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ExamSheetAvgOrderByAggregateInputObjectSchema = Schema;
