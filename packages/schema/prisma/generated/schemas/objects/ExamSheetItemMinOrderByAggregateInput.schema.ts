import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetItemMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    section_id: z.lazy(() => SortOrderSchema).optional(),
    question_id: z.lazy(() => SortOrderSchema).optional(),
    choices_id: z.lazy(() => SortOrderSchema).optional(),
    answer: z.lazy(() => SortOrderSchema).optional(),
    score: z.lazy(() => SortOrderSchema).optional(),
    graded_note: z.lazy(() => SortOrderSchema).optional(),
    graded_at: z.lazy(() => SortOrderSchema).optional(),
    graded_by_id: z.lazy(() => SortOrderSchema).optional(),
    seq: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ExamSheetItemMinOrderByAggregateInputObjectSchema = Schema;
