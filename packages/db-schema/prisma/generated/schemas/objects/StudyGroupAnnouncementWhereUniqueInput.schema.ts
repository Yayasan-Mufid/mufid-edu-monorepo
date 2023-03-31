import { z } from 'zod';
import { StudyGroupAnnouncementAnnouncement_idStudy_group_idCompoundUniqueInputObjectSchema } from './StudyGroupAnnouncementAnnouncement_idStudy_group_idCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAnnouncementWhereUniqueInput> = z
  .object({
    announcement_id_study_group_id: z
      .lazy(
        () =>
          StudyGroupAnnouncementAnnouncement_idStudy_group_idCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const StudyGroupAnnouncementWhereUniqueInputObjectSchema = Schema;
