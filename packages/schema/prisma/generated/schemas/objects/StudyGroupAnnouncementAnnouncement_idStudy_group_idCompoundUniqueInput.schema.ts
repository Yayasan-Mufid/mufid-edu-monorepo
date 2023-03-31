import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAnnouncementAnnouncement_idStudy_group_idCompoundUniqueInput> =
  z
    .object({
      announcement_id: z.string(),
      study_group_id: z.string(),
    })
    .strict();

export const StudyGroupAnnouncementAnnouncement_idStudy_group_idCompoundUniqueInputObjectSchema =
  Schema;
