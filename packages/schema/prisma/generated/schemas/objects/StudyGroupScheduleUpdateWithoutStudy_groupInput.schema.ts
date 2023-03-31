import { z } from 'zod';
import { ModuleItemUpdateOneRequiredWithoutScheduleNestedInputObjectSchema } from './ModuleItemUpdateOneRequiredWithoutScheduleNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupScheduleUpdateWithoutStudy_groupInput> =
  z
    .object({
      module_item: z
        .lazy(
          () =>
            ModuleItemUpdateOneRequiredWithoutScheduleNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const StudyGroupScheduleUpdateWithoutStudy_groupInputObjectSchema =
  Schema;
