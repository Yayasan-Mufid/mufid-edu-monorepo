import { z } from 'zod';
import { QuestionArgsObjectSchema } from './QuestionArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionChoiceSelect> = z
  .object({
    id: z.boolean().optional(),
    question_id: z.boolean().optional(),
    question: z
      .union([z.boolean(), z.lazy(() => QuestionArgsObjectSchema)])
      .optional(),
    text: z.boolean().optional(),
    answer_key: z.boolean().optional(),
    seq: z.boolean().optional(),
  })
  .strict();

export const QuestionChoiceSelectObjectSchema = Schema;
