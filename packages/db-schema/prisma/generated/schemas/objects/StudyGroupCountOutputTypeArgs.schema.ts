import { z } from 'zod';
import { StudyGroupCountOutputTypeSelectObjectSchema } from './StudyGroupCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupCountOutputTypeArgs> = z
  .object({
    select: z
      .lazy(() => StudyGroupCountOutputTypeSelectObjectSchema)
      .optional(),
  })
  .strict();

export const StudyGroupCountOutputTypeArgsObjectSchema = Schema;
