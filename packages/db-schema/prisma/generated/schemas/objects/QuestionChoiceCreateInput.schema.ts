import { z } from 'zod';
import { QuestionCreateNestedOneWithoutChoicesInputObjectSchema } from './QuestionCreateNestedOneWithoutChoicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionChoiceCreateInput> = z
  .object({
    id: z.string().optional(),
    text: z.string(),
    answer_key: z.boolean().optional(),
    seq: z.number(),
    question: z.lazy(
      () => QuestionCreateNestedOneWithoutChoicesInputObjectSchema,
    ),
  })
  .strict();

export const QuestionChoiceCreateInputObjectSchema = Schema;
