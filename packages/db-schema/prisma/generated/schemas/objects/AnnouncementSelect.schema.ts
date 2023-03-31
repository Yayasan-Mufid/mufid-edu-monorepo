import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { StudyGroupAnnouncementFindManySchema } from '../findManyStudyGroupAnnouncement.schema';
import { AnnouncementCountOutputTypeArgsObjectSchema } from './AnnouncementCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnnouncementSelect> = z
  .object({
    id: z.boolean().optional(),
    created_by_id: z.boolean().optional(),
    created_by: z
      .union([z.boolean(), z.lazy(() => UserArgsObjectSchema)])
      .optional(),
    title: z.boolean().optional(),
    text: z.boolean().optional(),
    start_date: z.boolean().optional(),
    end_date: z.boolean().optional(),
    public: z.boolean().optional(),
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

export const AnnouncementSelectObjectSchema = Schema;
