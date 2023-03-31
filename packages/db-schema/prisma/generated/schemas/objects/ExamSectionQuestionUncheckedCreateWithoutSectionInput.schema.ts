import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionQuestionUncheckedCreateWithoutSectionInput> =
  z
    .object({
      question_id: z.string(),
      min_score: z.number().optional(),
      max_scrore: z.number().optional(),
    })
    .strict();

export const ExamSectionQuestionUncheckedCreateWithoutSectionInputObjectSchema =
  Schema;
