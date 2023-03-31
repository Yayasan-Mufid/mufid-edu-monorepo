import { z } from 'zod';
import { StudyGroupScheduleStudy_group_idModule_item_idCompoundUniqueInputObjectSchema } from './StudyGroupScheduleStudy_group_idModule_item_idCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupScheduleWhereUniqueInput> = z
  .object({
    study_group_id_module_item_id: z
      .lazy(
        () =>
          StudyGroupScheduleStudy_group_idModule_item_idCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const StudyGroupScheduleWhereUniqueInputObjectSchema = Schema;
