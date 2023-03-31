import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupScheduleCreateManyModule_itemInput> = z
  .object({
    study_group_id: z.string(),
  })
  .strict();

export const StudyGroupScheduleCreateManyModule_itemInputObjectSchema = Schema;
