import { z } from 'zod';
import { ExamCountOutputTypeSelectObjectSchema } from './ExamCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => ExamCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict();

export const ExamCountOutputTypeArgsObjectSchema = Schema;
