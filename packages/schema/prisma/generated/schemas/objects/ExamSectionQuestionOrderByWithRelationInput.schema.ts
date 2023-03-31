import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ExamSectionOrderByWithRelationInputObjectSchema } from './ExamSectionOrderByWithRelationInput.schema';
import { QuestionOrderByWithRelationInputObjectSchema } from './QuestionOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionQuestionOrderByWithRelationInput> = z
  .object({
    section_id: z.lazy(() => SortOrderSchema).optional(),
    section: z
      .lazy(() => ExamSectionOrderByWithRelationInputObjectSchema)
      .optional(),
    question_id: z.lazy(() => SortOrderSchema).optional(),
    question: z
      .lazy(() => QuestionOrderByWithRelationInputObjectSchema)
      .optional(),
    min_score: z.lazy(() => SortOrderSchema).optional(),
    max_scrore: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ExamSectionQuestionOrderByWithRelationInputObjectSchema = Schema;
