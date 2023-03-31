import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionStatusCountOrderByAggregateInput> =
  z
    .object({
      question_id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      status: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ModuleItemQuestionStatusCountOrderByAggregateInputObjectSchema =
  Schema;
