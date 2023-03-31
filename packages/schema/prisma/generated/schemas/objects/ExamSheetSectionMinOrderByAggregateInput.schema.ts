import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    exam_sheet_id: z.lazy(() => SortOrderSchema).optional(),
    section_id: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ExamSheetSectionMinOrderByAggregateInputObjectSchema = Schema;
