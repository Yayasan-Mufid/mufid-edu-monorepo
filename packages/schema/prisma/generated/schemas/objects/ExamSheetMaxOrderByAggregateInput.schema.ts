import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    group_exam_id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    grader_id: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    start_time: z.lazy(() => SortOrderSchema).optional(),
    end_time: z.lazy(() => SortOrderSchema).optional(),
    graded_at: z.lazy(() => SortOrderSchema).optional(),
    grader_notes: z.lazy(() => SortOrderSchema).optional(),
    score: z.lazy(() => SortOrderSchema).optional(),
    token_text: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ExamSheetMaxOrderByAggregateInputObjectSchema = Schema;
