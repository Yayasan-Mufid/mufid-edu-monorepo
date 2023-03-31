import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAnnouncementUncheckedUpdateWithoutStudy_groupInput> =
  z
    .object({
      announcement_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const StudyGroupAnnouncementUncheckedUpdateWithoutStudy_groupInputObjectSchema =
  Schema;
