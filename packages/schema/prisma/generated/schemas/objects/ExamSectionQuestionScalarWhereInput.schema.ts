import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionQuestionScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ExamSectionQuestionScalarWhereInputObjectSchema),
        z.lazy(() => ExamSectionQuestionScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ExamSectionQuestionScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ExamSectionQuestionScalarWhereInputObjectSchema),
        z.lazy(() => ExamSectionQuestionScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    section_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    question_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    min_score: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    max_scrore: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const ExamSectionQuestionScalarWhereInputObjectSchema = Schema;
