import { z } from 'zod';
import { ExamSectionSelectObjectSchema } from './ExamSectionSelect.schema';
import { ExamSectionIncludeObjectSchema } from './ExamSectionInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionArgs> = z
  .object({
    select: z.lazy(() => ExamSectionSelectObjectSchema).optional(),
    include: z.lazy(() => ExamSectionIncludeObjectSchema).optional(),
  })
  .strict();

export const ExamSectionArgsObjectSchema = Schema;
