import { z } from 'zod';
import { StudyGroupAnnouncementSelectObjectSchema } from './objects/StudyGroupAnnouncementSelect.schema';
import { StudyGroupAnnouncementIncludeObjectSchema } from './objects/StudyGroupAnnouncementInclude.schema';
import { StudyGroupAnnouncementWhereUniqueInputObjectSchema } from './objects/StudyGroupAnnouncementWhereUniqueInput.schema';

export const StudyGroupAnnouncementFindUniqueSchema = z.object({
  select: StudyGroupAnnouncementSelectObjectSchema.optional(),
  include: StudyGroupAnnouncementIncludeObjectSchema.optional(),
  where: StudyGroupAnnouncementWhereUniqueInputObjectSchema,
});
