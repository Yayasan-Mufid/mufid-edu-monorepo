import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionStatusCountAggregateInputType> =
  z
    .object({
      question_id: z.literal(true).optional(),
      user_id: z.literal(true).optional(),
      status: z.literal(true).optional(),
      _all: z.literal(true).optional(),
    })
    .strict();

export const ModuleItemQuestionStatusCountAggregateInputObjectSchema = Schema;
