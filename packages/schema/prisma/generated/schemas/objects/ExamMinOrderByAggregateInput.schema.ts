import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    code: z.lazy(() => SortOrderSchema).optional(),
    module_id: z.lazy(() => SortOrderSchema).optional(),
    rules: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ExamMinOrderByAggregateInputObjectSchema = Schema;
