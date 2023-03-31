import { z } from 'zod';
import { StudyGroupSelectObjectSchema } from './StudyGroupSelect.schema';
import { StudyGroupIncludeObjectSchema } from './StudyGroupInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupArgs> = z
  .object({
    select: z.lazy(() => StudyGroupSelectObjectSchema).optional(),
    include: z.lazy(() => StudyGroupIncludeObjectSchema).optional(),
  })
  .strict();

export const StudyGroupArgsObjectSchema = Schema;
