import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetCountOutputTypeSelect> = z
  .object({
    sections: z.boolean().optional(),
  })
  .strict();

export const ExamSheetCountOutputTypeSelectObjectSchema = Schema;
