import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamCountOutputTypeSelect> = z
  .object({
    sheets: z.boolean().optional(),
  })
  .strict();

export const StudyGroupExamCountOutputTypeSelectObjectSchema = Schema;
