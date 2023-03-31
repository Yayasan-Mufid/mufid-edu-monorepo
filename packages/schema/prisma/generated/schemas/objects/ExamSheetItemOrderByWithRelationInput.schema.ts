import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ExamSheetSectionOrderByWithRelationInputObjectSchema } from './ExamSheetSectionOrderByWithRelationInput.schema';
import { QuestionOrderByWithRelationInputObjectSchema } from './QuestionOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetItemOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    section_id: z.lazy(() => SortOrderSchema).optional(),
    section: z
      .lazy(() => ExamSheetSectionOrderByWithRelationInputObjectSchema)
      .optional(),
    question_id: z.lazy(() => SortOrderSchema).optional(),
    question: z
      .lazy(() => QuestionOrderByWithRelationInputObjectSchema)
      .optional(),
    choices_id: z.lazy(() => SortOrderSchema).optional(),
    answer: z.lazy(() => SortOrderSchema).optional(),
    score: z.lazy(() => SortOrderSchema).optional(),
    graded_note: z.lazy(() => SortOrderSchema).optional(),
    graded_at: z.lazy(() => SortOrderSchema).optional(),
    graded_by_id: z.lazy(() => SortOrderSchema).optional(),
    graded_by: z
      .lazy(() => UserOrderByWithRelationInputObjectSchema)
      .optional(),
    seq: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ExamSheetItemOrderByWithRelationInputObjectSchema = Schema;
