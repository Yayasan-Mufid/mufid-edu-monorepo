import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ExamOrderByWithRelationInputObjectSchema } from './ExamOrderByWithRelationInput.schema';
import { ExamSectionQuestionOrderByRelationAggregateInputObjectSchema } from './ExamSectionQuestionOrderByRelationAggregateInput.schema';
import { ExamSheetSectionOrderByRelationAggregateInputObjectSchema } from './ExamSheetSectionOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    exam_id: z.lazy(() => SortOrderSchema).optional(),
    exam: z.lazy(() => ExamOrderByWithRelationInputObjectSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    text: z.lazy(() => SortOrderSchema).optional(),
    randomize_questions: z.lazy(() => SortOrderSchema).optional(),
    nb_of_questions: z.lazy(() => SortOrderSchema).optional(),
    seq: z.lazy(() => SortOrderSchema).optional(),
    default_point: z.lazy(() => SortOrderSchema).optional(),
    weight: z.lazy(() => SortOrderSchema).optional(),
    questions: z
      .lazy(() => ExamSectionQuestionOrderByRelationAggregateInputObjectSchema)
      .optional(),
    sheet_sections: z
      .lazy(() => ExamSheetSectionOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ExamSectionOrderByWithRelationInputObjectSchema = Schema;
