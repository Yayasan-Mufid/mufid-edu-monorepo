import { z } from 'zod';
import { ExamSectionArgsObjectSchema } from './ExamSectionArgs.schema';
import { QuestionArgsObjectSchema } from './QuestionArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionQuestionInclude> = z
  .object({
    section: z
      .union([z.boolean(), z.lazy(() => ExamSectionArgsObjectSchema)])
      .optional(),
    question: z
      .union([z.boolean(), z.lazy(() => QuestionArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const ExamSectionQuestionIncludeObjectSchema = Schema;
