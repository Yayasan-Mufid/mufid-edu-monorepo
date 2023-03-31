import { z } from 'zod';
import { StudyGroupUpdateOneRequiredWithoutAnnouncementsNestedInputObjectSchema } from './StudyGroupUpdateOneRequiredWithoutAnnouncementsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAnnouncementUpdateWithoutAnnouncementInput> =
  z
    .object({
      study_group: z
        .lazy(
          () =>
            StudyGroupUpdateOneRequiredWithoutAnnouncementsNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const StudyGroupAnnouncementUpdateWithoutAnnouncementInputObjectSchema =
  Schema;
