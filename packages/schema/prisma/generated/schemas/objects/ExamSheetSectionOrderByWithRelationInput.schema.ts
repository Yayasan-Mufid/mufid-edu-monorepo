import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ExamSheetOrderByWithRelationInputObjectSchema } from './ExamSheetOrderByWithRelationInput.schema';
import { ExamSectionOrderByWithRelationInputObjectSchema } from './ExamSectionOrderByWithRelationInput.schema';
import { ExamSheetItemOrderByRelationAggregateInputObjectSchema } from './ExamSheetItemOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    exam_sheet_id: z.lazy(() => SortOrderSchema).optional(),
    exam_sheet: z
      .lazy(() => ExamSheetOrderByWithRelationInputObjectSchema)
      .optional(),
    section_id: z.lazy(() => SortOrderSchema).optional(),
    section: z
      .lazy(() => ExamSectionOrderByWithRelationInputObjectSchema)
      .optional(),
    items: z
      .lazy(() => ExamSheetItemOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ExamSheetSectionOrderByWithRelationInputObjectSchema = Schema;
