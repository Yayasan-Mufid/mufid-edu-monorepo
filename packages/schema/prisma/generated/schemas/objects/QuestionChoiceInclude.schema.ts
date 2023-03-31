import { z } from 'zod';
import { QuestionArgsObjectSchema } from './QuestionArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionChoiceInclude> = z
  .object({
    question: z
      .union([z.boolean(), z.lazy(() => QuestionArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const QuestionChoiceIncludeObjectSchema = Schema;
