import { z } from 'zod';
import { ExamSheetCountOutputTypeSelectObjectSchema } from './ExamSheetCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => ExamSheetCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict();

export const ExamSheetCountOutputTypeArgsObjectSchema = Schema;
