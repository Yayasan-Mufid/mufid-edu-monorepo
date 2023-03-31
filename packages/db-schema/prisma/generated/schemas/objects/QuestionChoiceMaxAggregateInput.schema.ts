import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionChoiceMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    question_id: z.literal(true).optional(),
    text: z.literal(true).optional(),
    answer_key: z.literal(true).optional(),
    seq: z.literal(true).optional(),
  })
  .strict();

export const QuestionChoiceMaxAggregateInputObjectSchema = Schema;
