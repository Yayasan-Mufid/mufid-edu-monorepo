import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionChoiceUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    question_id: z.string(),
    text: z.string(),
    answer_key: z.boolean().optional(),
    seq: z.number(),
  })
  .strict();

export const QuestionChoiceUncheckedCreateInputObjectSchema = Schema;
