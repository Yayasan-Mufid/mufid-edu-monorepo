import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ExamSheetSectionCountOrderByAggregateInputObjectSchema } from './ExamSheetSectionCountOrderByAggregateInput.schema';
import { ExamSheetSectionMaxOrderByAggregateInputObjectSchema } from './ExamSheetSectionMaxOrderByAggregateInput.schema';
import { ExamSheetSectionMinOrderByAggregateInputObjectSchema } from './ExamSheetSectionMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    exam_sheet_id: z.lazy(() => SortOrderSchema).optional(),
    section_id: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ExamSheetSectionCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ExamSheetSectionMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ExamSheetSectionMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ExamSheetSectionOrderByWithAggregationInputObjectSchema = Schema;
