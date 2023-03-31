import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { StudyGroupAnnouncementFindManySchema } from '../findManyStudyGroupAnnouncement.schema';
import { AnnouncementCountOutputTypeArgsObjectSchema } from './AnnouncementCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnnouncementInclude> = z
  .object({
    created_by: z
      .union([z.boolean(), z.lazy(() => UserArgsObjectSchema)])
      .optional(),
    study_groups: z
      .union([z.boolean(), z.lazy(() => StudyGroupAnnouncementFindManySchema)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => AnnouncementCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const AnnouncementIncludeObjectSchema = Schema;
