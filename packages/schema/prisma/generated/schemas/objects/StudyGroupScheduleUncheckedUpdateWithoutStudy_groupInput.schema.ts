import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupScheduleUncheckedUpdateWithoutStudy_groupInput> =
  z
    .object({
      module_item_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const StudyGroupScheduleUncheckedUpdateWithoutStudy_groupInputObjectSchema =
  Schema;
