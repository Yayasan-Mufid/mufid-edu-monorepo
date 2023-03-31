import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupCountOutputTypeSelect> = z
  .object({
    admins: z.boolean().optional(),
    schedule: z.boolean().optional(),
    applicants: z.boolean().optional(),
    students: z.boolean().optional(),
    exams: z.boolean().optional(),
    announcements: z.boolean().optional(),
  })
  .strict();

export const StudyGroupCountOutputTypeSelectObjectSchema = Schema;
