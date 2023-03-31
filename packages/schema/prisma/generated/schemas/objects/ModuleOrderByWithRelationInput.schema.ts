import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProgramOrderByWithRelationInputObjectSchema } from './ProgramOrderByWithRelationInput.schema';
import { ModuleAdminOrderByRelationAggregateInputObjectSchema } from './ModuleAdminOrderByRelationAggregateInput.schema';
import { ModuleItemOrderByRelationAggregateInputObjectSchema } from './ModuleItemOrderByRelationAggregateInput.schema';
import { ModuleAccessOrderByRelationAggregateInputObjectSchema } from './ModuleAccessOrderByRelationAggregateInput.schema';
import { StudyGroupOrderByRelationAggregateInputObjectSchema } from './StudyGroupOrderByRelationAggregateInput.schema';
import { QuestionOrderByRelationAggregateInputObjectSchema } from './QuestionOrderByRelationAggregateInput.schema';
import { ExamOrderByRelationAggregateInputObjectSchema } from './ExamOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    program_id: z.lazy(() => SortOrderSchema).optional(),
    program: z
      .lazy(() => ProgramOrderByWithRelationInputObjectSchema)
      .optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    code: z.lazy(() => SortOrderSchema).optional(),
    slug: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    published: z.lazy(() => SortOrderSchema).optional(),
    archived: z.lazy(() => SortOrderSchema).optional(),
    seq: z.lazy(() => SortOrderSchema).optional(),
    cover_img_url: z.lazy(() => SortOrderSchema).optional(),
    bg_img_url: z.lazy(() => SortOrderSchema).optional(),
    admins: z
      .lazy(() => ModuleAdminOrderByRelationAggregateInputObjectSchema)
      .optional(),
    items: z
      .lazy(() => ModuleItemOrderByRelationAggregateInputObjectSchema)
      .optional(),
    students: z
      .lazy(() => ModuleAccessOrderByRelationAggregateInputObjectSchema)
      .optional(),
    study_groups: z
      .lazy(() => StudyGroupOrderByRelationAggregateInputObjectSchema)
      .optional(),
    questions: z
      .lazy(() => QuestionOrderByRelationAggregateInputObjectSchema)
      .optional(),
    exams: z
      .lazy(() => ExamOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ModuleOrderByWithRelationInputObjectSchema = Schema;
