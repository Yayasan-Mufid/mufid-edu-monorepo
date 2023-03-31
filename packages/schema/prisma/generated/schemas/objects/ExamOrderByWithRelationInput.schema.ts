import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ModuleOrderByWithRelationInputObjectSchema } from './ModuleOrderByWithRelationInput.schema';
import { ExamSectionOrderByRelationAggregateInputObjectSchema } from './ExamSectionOrderByRelationAggregateInput.schema';
import { StudyGroupExamOrderByRelationAggregateInputObjectSchema } from './StudyGroupExamOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    code: z.lazy(() => SortOrderSchema).optional(),
    module_id: z.lazy(() => SortOrderSchema).optional(),
    module: z.lazy(() => ModuleOrderByWithRelationInputObjectSchema).optional(),
    rules: z.lazy(() => SortOrderSchema).optional(),
    sections: z
      .lazy(() => ExamSectionOrderByRelationAggregateInputObjectSchema)
      .optional(),
    study_group_exams: z
      .lazy(() => StudyGroupExamOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ExamOrderByWithRelationInputObjectSchema = Schema;
