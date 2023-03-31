import { z } from 'zod';
import { AnnouncementUpdateOneRequiredWithoutStudy_groupsNestedInputObjectSchema } from './AnnouncementUpdateOneRequiredWithoutStudy_groupsNestedInput.schema';
import { StudyGroupUpdateOneRequiredWithoutAnnouncementsNestedInputObjectSchema } from './StudyGroupUpdateOneRequiredWithoutAnnouncementsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAnnouncementUpdateInput> = z
  .object({
    announcement: z
      .lazy(
        () =>
          AnnouncementUpdateOneRequiredWithoutStudy_groupsNestedInputObjectSchema,
      )
      .optional(),
    study_group: z
      .lazy(
        () =>
          StudyGroupUpdateOneRequiredWithoutAnnouncementsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const StudyGroupAnnouncementUpdateInputObjectSchema = Schema;
