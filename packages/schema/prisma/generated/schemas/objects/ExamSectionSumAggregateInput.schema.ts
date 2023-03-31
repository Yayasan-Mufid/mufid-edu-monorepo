import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionSumAggregateInputType> = z
  .object({
    nb_of_questions: z.literal(true).optional(),
    seq: z.literal(true).optional(),
    default_point: z.literal(true).optional(),
    weight: z.literal(true).optional(),
  })
  .strict();

export const ExamSectionSumAggregateInputObjectSchema = Schema;
