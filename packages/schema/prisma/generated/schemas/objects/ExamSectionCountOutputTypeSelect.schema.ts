import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionCountOutputTypeSelect> = z
  .object({
    questions: z.boolean().optional(),
    sheet_sections: z.boolean().optional(),
  })
  .strict();

export const ExamSectionCountOutputTypeSelectObjectSchema = Schema;
