import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAnnouncementUncheckedCreateInput> = z
  .object({
    announcement_id: z.string(),
    study_group_id: z.string(),
  })
  .strict();

export const StudyGroupAnnouncementUncheckedCreateInputObjectSchema = Schema;
