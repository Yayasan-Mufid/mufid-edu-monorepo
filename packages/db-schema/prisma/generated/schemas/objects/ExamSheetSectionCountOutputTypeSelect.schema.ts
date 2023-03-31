import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionCountOutputTypeSelect> = z
  .object({
    items: z.boolean().optional(),
  })
  .strict();

export const ExamSheetSectionCountOutputTypeSelectObjectSchema = Schema;
