import { z } from 'zod';
import { ExamSheetSectionCountOutputTypeSelectObjectSchema } from './ExamSheetSectionCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionCountOutputTypeArgs> = z
  .object({
    select: z
      .lazy(() => ExamSheetSectionCountOutputTypeSelectObjectSchema)
      .optional(),
  })
  .strict();

export const ExamSheetSectionCountOutputTypeArgsObjectSchema = Schema;
