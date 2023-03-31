import { z } from 'zod';
import { ExamSectionCreateNestedOneWithoutQuestionsInputObjectSchema } from './ExamSectionCreateNestedOneWithoutQuestionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionQuestionCreateWithoutQuestionInput> =
  z
    .object({
      min_score: z.number().optional(),
      max_scrore: z.number().optional(),
      section: z.lazy(
        () => ExamSectionCreateNestedOneWithoutQuestionsInputObjectSchema,
      ),
    })
    .strict();

export const ExamSectionQuestionCreateWithoutQuestionInputObjectSchema = Schema;
