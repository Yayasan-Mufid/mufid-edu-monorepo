import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ModuleItemOrderByWithRelationInputObjectSchema } from './ModuleItemOrderByWithRelationInput.schema';
import { QuestionOrderByWithRelationInputObjectSchema } from './QuestionOrderByWithRelationInput.schema';
import { ModuleItemQuestionStatusOrderByRelationAggregateInputObjectSchema } from './ModuleItemQuestionStatusOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    module_item_id: z.lazy(() => SortOrderSchema).optional(),
    module_item: z
      .lazy(() => ModuleItemOrderByWithRelationInputObjectSchema)
      .optional(),
    question_id: z.lazy(() => SortOrderSchema).optional(),
    question: z
      .lazy(() => QuestionOrderByWithRelationInputObjectSchema)
      .optional(),
    user_status: z
      .lazy(
        () => ModuleItemQuestionStatusOrderByRelationAggregateInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ModuleItemQuestionOrderByWithRelationInputObjectSchema = Schema;
