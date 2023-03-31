import { z } from 'zod';
import { ExamSectionQuestionWhereInputObjectSchema } from './ExamSectionQuestionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionQuestionListRelationFilter> = z
  .object({
    every: z.lazy(() => ExamSectionQuestionWhereInputObjectSchema).optional(),
    some: z.lazy(() => ExamSectionQuestionWhereInputObjectSchema).optional(),
    none: z.lazy(() => ExamSectionQuestionWhereInputObjectSchema).optional(),
  })
  .strict();

export const ExamSectionQuestionListRelationFilterObjectSchema = Schema;
