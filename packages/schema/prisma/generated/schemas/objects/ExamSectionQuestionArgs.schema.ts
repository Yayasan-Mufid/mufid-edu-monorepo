import { z } from 'zod';
import { ExamSectionQuestionSelectObjectSchema } from './ExamSectionQuestionSelect.schema';
import { ExamSectionQuestionIncludeObjectSchema } from './ExamSectionQuestionInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionQuestionArgs> = z
  .object({
    select: z.lazy(() => ExamSectionQuestionSelectObjectSchema).optional(),
    include: z.lazy(() => ExamSectionQuestionIncludeObjectSchema).optional(),
  })
  .strict();

export const ExamSectionQuestionArgsObjectSchema = Schema;
