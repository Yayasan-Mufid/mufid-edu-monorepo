import { z } from 'zod';
import { StudyGroupUpdateOneRequiredWithoutScheduleNestedInputObjectSchema } from './StudyGroupUpdateOneRequiredWithoutScheduleNestedInput.schema';
import { ModuleItemUpdateOneRequiredWithoutScheduleNestedInputObjectSchema } from './ModuleItemUpdateOneRequiredWithoutScheduleNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupScheduleUpdateInput> = z
  .object({
    study_group: z
      .lazy(
        () => StudyGroupUpdateOneRequiredWithoutScheduleNestedInputObjectSchema,
      )
      .optional(),
    module_item: z
      .lazy(
        () => ModuleItemUpdateOneRequiredWithoutScheduleNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const StudyGroupScheduleUpdateInputObjectSchema = Schema;
