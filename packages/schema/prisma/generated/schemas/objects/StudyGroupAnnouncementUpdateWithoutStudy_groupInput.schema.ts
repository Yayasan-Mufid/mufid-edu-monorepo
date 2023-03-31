import { z } from 'zod';
import { AnnouncementUpdateOneRequiredWithoutStudy_groupsNestedInputObjectSchema } from './AnnouncementUpdateOneRequiredWithoutStudy_groupsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAnnouncementUpdateWithoutStudy_groupInput> =
  z
    .object({
      announcement: z
        .lazy(
          () =>
            AnnouncementUpdateOneRequiredWithoutStudy_groupsNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const StudyGroupAnnouncementUpdateWithoutStudy_groupInputObjectSchema =
  Schema;
