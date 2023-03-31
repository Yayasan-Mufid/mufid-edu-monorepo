import { z } from 'zod';
import { ExamSheetSectionSelectObjectSchema } from './ExamSheetSectionSelect.schema';
import { ExamSheetSectionIncludeObjectSchema } from './ExamSheetSectionInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionArgs> = z
  .object({
    select: z.lazy(() => ExamSheetSectionSelectObjectSchema).optional(),
    include: z.lazy(() => ExamSheetSectionIncludeObjectSchema).optional(),
  })
  .strict();

export const ExamSheetSectionArgsObjectSchema = Schema;
