import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionCreateManySectionInput> = z
  .object({
    id: z.string().optional(),
    exam_sheet_id: z.string(),
  })
  .strict();

export const ExamSheetSectionCreateManySectionInputObjectSchema = Schema;
