import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleCountOutputTypeSelect> = z
  .object({
    admins: z.boolean().optional(),
    items: z.boolean().optional(),
    students: z.boolean().optional(),
    study_groups: z.boolean().optional(),
    questions: z.boolean().optional(),
    exams: z.boolean().optional(),
  })
  .strict();

export const ModuleCountOutputTypeSelectObjectSchema = Schema;
