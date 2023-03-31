import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ModuleOrderByRelationAggregateInputObjectSchema } from './ModuleOrderByRelationAggregateInput.schema';
import { ProgramAdminOrderByRelationAggregateInputObjectSchema } from './ProgramAdminOrderByRelationAggregateInput.schema';
import { QuestionOrderByRelationAggregateInputObjectSchema } from './QuestionOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    code: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    cover_img_url: z.lazy(() => SortOrderSchema).optional(),
    bg_img_url: z.lazy(() => SortOrderSchema).optional(),
    published: z.lazy(() => SortOrderSchema).optional(),
    modules: z
      .lazy(() => ModuleOrderByRelationAggregateInputObjectSchema)
      .optional(),
    admins: z
      .lazy(() => ProgramAdminOrderByRelationAggregateInputObjectSchema)
      .optional(),
    questions: z
      .lazy(() => QuestionOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProgramOrderByWithRelationInputObjectSchema = Schema;
