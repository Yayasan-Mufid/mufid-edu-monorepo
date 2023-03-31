import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionQuestionMinOrderByAggregateInput> = z
  .object({
    section_id: z.lazy(() => SortOrderSchema).optional(),
    question_id: z.lazy(() => SortOrderSchema).optional(),
    min_score: z.lazy(() => SortOrderSchema).optional(),
    max_scrore: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ExamSectionQuestionMinOrderByAggregateInputObjectSchema = Schema;
