import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { StudyGroupExamOrderByWithRelationInputObjectSchema } from './StudyGroupExamOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { ExamSheetSectionOrderByRelationAggregateInputObjectSchema } from './ExamSheetSectionOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    group_exam_id: z.lazy(() => SortOrderSchema).optional(),
    group_exam: z
      .lazy(() => StudyGroupExamOrderByWithRelationInputObjectSchema)
      .optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    grader_id: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    grader: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    start_time: z.lazy(() => SortOrderSchema).optional(),
    end_time: z.lazy(() => SortOrderSchema).optional(),
    graded_at: z.lazy(() => SortOrderSchema).optional(),
    grader_notes: z.lazy(() => SortOrderSchema).optional(),
    score: z.lazy(() => SortOrderSchema).optional(),
    sections: z
      .lazy(() => ExamSheetSectionOrderByRelationAggregateInputObjectSchema)
      .optional(),
    token_text: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ExamSheetOrderByWithRelationInputObjectSchema = Schema;
