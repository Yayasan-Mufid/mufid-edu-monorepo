import { z } from 'zod';
import { StudyGroupAnnouncementSelectObjectSchema } from './objects/StudyGroupAnnouncementSelect.schema';
import { StudyGroupAnnouncementIncludeObjectSchema } from './objects/StudyGroupAnnouncementInclude.schema';
import { StudyGroupAnnouncementCreateInputObjectSchema } from './objects/StudyGroupAnnouncementCreateInput.schema';
import { StudyGroupAnnouncementUncheckedCreateInputObjectSchema } from './objects/StudyGroupAnnouncementUncheckedCreateInput.schema';

export const StudyGroupAnnouncementCreateOneSchema = z.object({
  select: StudyGroupAnnouncementSelectObjectSchema.optional(),
  include: StudyGroupAnnouncementIncludeObjectSchema.optional(),
  data: z.union([
    StudyGroupAnnouncementCreateInputObjectSchema,
    StudyGroupAnnouncementUncheckedCreateInputObjectSchema,
  ]),
});
