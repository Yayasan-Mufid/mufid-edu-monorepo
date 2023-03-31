import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionSumOrderByAggregateInput> = z
  .object({
    max_score: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const QuestionSumOrderByAggregateInputObjectSchema = Schema;
