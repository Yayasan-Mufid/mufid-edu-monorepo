import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupScheduleUncheckedCreateInput> = z
  .object({
    study_group_id: z.string(),
    module_item_id: z.string(),
  })
  .strict();

export const StudyGroupScheduleUncheckedCreateInputObjectSchema = Schema;
