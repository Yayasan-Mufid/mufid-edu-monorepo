import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    exam_id: z.literal(true).optional(),
    title: z.literal(true).optional(),
    text: z.literal(true).optional(),
    randomize_questions: z.literal(true).optional(),
    nb_of_questions: z.literal(true).optional(),
    seq: z.literal(true).optional(),
    default_point: z.literal(true).optional(),
    weight: z.literal(true).optional(),
  })
  .strict();

export const ExamSectionMinAggregateInputObjectSchema = Schema;
