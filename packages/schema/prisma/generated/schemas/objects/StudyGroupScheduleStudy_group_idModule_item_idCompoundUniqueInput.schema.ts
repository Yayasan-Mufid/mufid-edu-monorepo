import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupScheduleStudy_group_idModule_item_idCompoundUniqueInput> =
  z
    .object({
      study_group_id: z.string(),
      module_item_id: z.string(),
    })
    .strict();

export const StudyGroupScheduleStudy_group_idModule_item_idCompoundUniqueInputObjectSchema =
  Schema;
