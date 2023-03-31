import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAdminCreateManyInput> = z
  .object({
    study_group_id: z.string(),
    user_id: z.string(),
  })
  .strict();

export const StudyGroupAdminCreateManyInputObjectSchema = Schema;
