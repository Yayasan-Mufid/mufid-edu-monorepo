import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionStatusMinAggregateInputType> =
  z
    .object({
      question_id: z.literal(true).optional(),
      user_id: z.literal(true).optional(),
      status: z.literal(true).optional(),
    })
    .strict();

export const ModuleItemQuestionStatusMinAggregateInputObjectSchema = Schema;
