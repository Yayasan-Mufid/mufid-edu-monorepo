import { z } from 'zod';
import { AnnouncementCreateNestedOneWithoutStudy_groupsInputObjectSchema } from './AnnouncementCreateNestedOneWithoutStudy_groupsInput.schema';
import { StudyGroupCreateNestedOneWithoutAnnouncementsInputObjectSchema } from './StudyGroupCreateNestedOneWithoutAnnouncementsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAnnouncementCreateInput> = z
  .object({
    announcement: z.lazy(
      () => AnnouncementCreateNestedOneWithoutStudy_groupsInputObjectSchema,
    ),
    study_group: z.lazy(
      () => StudyGroupCreateNestedOneWithoutAnnouncementsInputObjectSchema,
    ),
  })
  .strict();

export const StudyGroupAnnouncementCreateInputObjectSchema = Schema;
