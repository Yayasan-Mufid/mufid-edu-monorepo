import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupScheduleUncheckedCreateWithoutModule_itemInput> =
  z
    .object({
      study_group_id: z.string(),
    })
    .strict();

export const StudyGroupScheduleUncheckedCreateWithoutModule_itemInputObjectSchema =
  Schema;
