import { z } from 'zod';
import { StudyGroupAnnouncementSelectObjectSchema } from './StudyGroupAnnouncementSelect.schema';
import { StudyGroupAnnouncementIncludeObjectSchema } from './StudyGroupAnnouncementInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAnnouncementArgs> = z
  .object({
    select: z.lazy(() => StudyGroupAnnouncementSelectObjectSchema).optional(),
    include: z.lazy(() => StudyGroupAnnouncementIncludeObjectSchema).optional(),
  })
  .strict();

export const StudyGroupAnnouncementArgsObjectSchema = Schema;
