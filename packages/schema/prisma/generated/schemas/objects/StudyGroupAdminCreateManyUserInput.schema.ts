import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAdminCreateManyUserInput> = z
  .object({
    study_group_id: z.string(),
  })
  .strict();

export const StudyGroupAdminCreateManyUserInputObjectSchema = Schema;
