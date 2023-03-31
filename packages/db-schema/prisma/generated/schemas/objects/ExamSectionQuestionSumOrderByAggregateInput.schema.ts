import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionQuestionSumOrderByAggregateInput> = z
  .object({
    min_score: z.lazy(() => SortOrderSchema).optional(),
    max_scrore: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ExamSectionQuestionSumOrderByAggregateInputObjectSchema = Schema;
