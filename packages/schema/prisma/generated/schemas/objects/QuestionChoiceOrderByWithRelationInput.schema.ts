import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { QuestionOrderByWithRelationInputObjectSchema } from './QuestionOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionChoiceOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    question_id: z.lazy(() => SortOrderSchema).optional(),
    question: z
      .lazy(() => QuestionOrderByWithRelationInputObjectSchema)
      .optional(),
    text: z.lazy(() => SortOrderSchema).optional(),
    answer_key: z.lazy(() => SortOrderSchema).optional(),
    seq: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const QuestionChoiceOrderByWithRelationInputObjectSchema = Schema;
