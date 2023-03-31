import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupScheduleUncheckedCreateWithoutStudy_groupInput> =
  z
    .object({
      module_item_id: z.string(),
    })
    .strict();

export const StudyGroupScheduleUncheckedCreateWithoutStudy_groupInputObjectSchema =
  Schema;
