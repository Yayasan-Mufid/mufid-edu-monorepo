import { z } from 'zod';
import { ExamSelectObjectSchema } from './ExamSelect.schema';
import { ExamIncludeObjectSchema } from './ExamInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamArgs> = z
  .object({
    select: z.lazy(() => ExamSelectObjectSchema).optional(),
    include: z.lazy(() => ExamIncludeObjectSchema).optional(),
  })
  .strict();

export const ExamArgsObjectSchema = Schema;
