import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    module_item_id: z.lazy(() => SortOrderSchema).optional(),
    question_id: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ModuleItemQuestionMinOrderByAggregateInputObjectSchema = Schema;
