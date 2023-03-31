import { z } from 'zod';
import { ExamSheetItemSelectObjectSchema } from './ExamSheetItemSelect.schema';
import { ExamSheetItemIncludeObjectSchema } from './ExamSheetItemInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetItemArgs> = z
  .object({
    select: z.lazy(() => ExamSheetItemSelectObjectSchema).optional(),
    include: z.lazy(() => ExamSheetItemIncludeObjectSchema).optional(),
  })
  .strict();

export const ExamSheetItemArgsObjectSchema = Schema;
