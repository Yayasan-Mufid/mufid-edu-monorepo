import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamCountOutputTypeSelect> = z
  .object({
    sections: z.boolean().optional(),
    study_group_exams: z.boolean().optional(),
  })
  .strict();

export const ExamCountOutputTypeSelectObjectSchema = Schema;
