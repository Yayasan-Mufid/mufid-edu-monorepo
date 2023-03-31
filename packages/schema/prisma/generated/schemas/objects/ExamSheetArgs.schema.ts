import { z } from 'zod';
import { ExamSheetSelectObjectSchema } from './ExamSheetSelect.schema';
import { ExamSheetIncludeObjectSchema } from './ExamSheetInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetArgs> = z
  .object({
    select: z.lazy(() => ExamSheetSelectObjectSchema).optional(),
    include: z.lazy(() => ExamSheetIncludeObjectSchema).optional(),
  })
  .strict();

export const ExamSheetArgsObjectSchema = Schema;
