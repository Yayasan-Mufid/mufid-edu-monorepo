import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionCreateManyExam_sheetInput> = z
  .object({
    id: z.string().optional(),
    section_id: z.string(),
  })
  .strict();

export const ExamSheetSectionCreateManyExam_sheetInputObjectSchema = Schema;
