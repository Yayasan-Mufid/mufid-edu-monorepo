import { z } from 'zod';
import { StudyGroupExamSelectObjectSchema } from './StudyGroupExamSelect.schema';
import { StudyGroupExamIncludeObjectSchema } from './StudyGroupExamInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamArgs> = z
  .object({
    select: z.lazy(() => StudyGroupExamSelectObjectSchema).optional(),
    include: z.lazy(() => StudyGroupExamIncludeObjectSchema).optional(),
  })
  .strict();

export const StudyGroupExamArgsObjectSchema = Schema;
