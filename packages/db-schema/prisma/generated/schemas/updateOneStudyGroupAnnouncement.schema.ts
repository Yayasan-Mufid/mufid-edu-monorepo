import { z } from 'zod';
import { StudyGroupAnnouncementSelectObjectSchema } from './objects/StudyGroupAnnouncementSelect.schema';
import { StudyGroupAnnouncementIncludeObjectSchema } from './objects/StudyGroupAnnouncementInclude.schema';
import { StudyGroupAnnouncementUpdateInputObjectSchema } from './objects/StudyGroupAnnouncementUpdateInput.schema';
import { StudyGroupAnnouncementUncheckedUpdateInputObjectSchema } from './objects/StudyGroupAnnouncementUncheckedUpdateInput.schema';
import { StudyGroupAnnouncementWhereUniqueInputObjectSchema } from './objects/StudyGroupAnnouncementWhereUniqueInput.schema';

export const StudyGroupAnnouncementUpdateOneSchema = z.object({
  select: StudyGroupAnnouncementSelectObjectSchema.optional(),
  include: StudyGroupAnnouncementIncludeObjectSchema.optional(),
  data: z.union([
    StudyGroupAnnouncementUpdateInputObjectSchema,
    StudyGroupAnnouncementUncheckedUpdateInputObjectSchema,
  ]),
  where: StudyGroupAnnouncementWhereUniqueInputObjectSchema,
});
