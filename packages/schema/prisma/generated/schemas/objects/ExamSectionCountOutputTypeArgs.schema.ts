import { z } from 'zod';
import { ExamSectionCountOutputTypeSelectObjectSchema } from './ExamSectionCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionCountOutputTypeArgs> = z
  .object({
    select: z
      .lazy(() => ExamSectionCountOutputTypeSelectObjectSchema)
      .optional(),
  })
  .strict();

export const ExamSectionCountOutputTypeArgsObjectSchema = Schema;
