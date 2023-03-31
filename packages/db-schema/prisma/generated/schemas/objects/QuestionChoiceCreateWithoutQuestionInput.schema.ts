import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionChoiceCreateWithoutQuestionInput> = z
  .object({
    id: z.string().optional(),
    text: z.string(),
    answer_key: z.boolean().optional(),
    seq: z.number(),
  })
  .strict();

export const QuestionChoiceCreateWithoutQuestionInputObjectSchema = Schema;
