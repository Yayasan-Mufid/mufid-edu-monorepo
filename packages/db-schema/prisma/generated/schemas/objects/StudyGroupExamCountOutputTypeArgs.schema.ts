import { z } from 'zod';
import { StudyGroupExamCountOutputTypeSelectObjectSchema } from './StudyGroupExamCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamCountOutputTypeArgs> = z
  .object({
    select: z
      .lazy(() => StudyGroupExamCountOutputTypeSelectObjectSchema)
      .optional(),
  })
  .strict();

export const StudyGroupExamCountOutputTypeArgsObjectSchema = Schema;
