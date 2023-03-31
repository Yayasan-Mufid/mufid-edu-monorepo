import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    exam_sheet_id: z.literal(true).optional(),
    section_id: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ExamSheetSectionCountAggregateInputObjectSchema = Schema;
