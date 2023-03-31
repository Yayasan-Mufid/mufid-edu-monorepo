import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    exam_sheet_id: z.literal(true).optional(),
    section_id: z.literal(true).optional(),
  })
  .strict();

export const ExamSheetSectionMaxAggregateInputObjectSchema = Schema;
