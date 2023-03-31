import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupStudentCreateManyInput> = z
  .object({
    study_group_id: z.string(),
    user_id: z.string(),
  })
  .strict();

export const StudyGroupStudentCreateManyInputObjectSchema = Schema;
