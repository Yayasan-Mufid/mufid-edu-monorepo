import { z } from 'zod';
import { AnnouncementArgsObjectSchema } from './AnnouncementArgs.schema';
import { StudyGroupArgsObjectSchema } from './StudyGroupArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAnnouncementSelect> = z
  .object({
    announcement_id: z.boolean().optional(),
    announcement: z
      .union([z.boolean(), z.lazy(() => AnnouncementArgsObjectSchema)])
      .optional(),
    study_group_id: z.boolean().optional(),
    study_group: z
      .union([z.boolean(), z.lazy(() => StudyGroupArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const StudyGroupAnnouncementSelectObjectSchema = Schema;
