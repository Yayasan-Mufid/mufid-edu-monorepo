import { z } from 'zod';
import { AnnouncementArgsObjectSchema } from './AnnouncementArgs.schema';
import { StudyGroupArgsObjectSchema } from './StudyGroupArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAnnouncementInclude> = z
  .object({
    announcement: z
      .union([z.boolean(), z.lazy(() => AnnouncementArgsObjectSchema)])
      .optional(),
    study_group: z
      .union([z.boolean(), z.lazy(() => StudyGroupArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const StudyGroupAnnouncementIncludeObjectSchema = Schema;
