import { z } from 'zod';
import { StudyGroupUpdateOneRequiredWithoutScheduleNestedInputObjectSchema } from './StudyGroupUpdateOneRequiredWithoutScheduleNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupScheduleUpdateWithoutModule_itemInput> =
  z
    .object({
      study_group: z
        .lazy(
          () =>
            StudyGroupUpdateOneRequiredWithoutScheduleNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const StudyGroupScheduleUpdateWithoutModule_itemInputObjectSchema =
  Schema;
