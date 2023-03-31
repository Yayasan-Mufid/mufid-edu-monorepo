import { z } from 'zod';
import { StudyGroupAnnouncementSelectObjectSchema } from './objects/StudyGroupAnnouncementSelect.schema';
import { StudyGroupAnnouncementIncludeObjectSchema } from './objects/StudyGroupAnnouncementInclude.schema';
import { StudyGroupAnnouncementWhereUniqueInputObjectSchema } from './objects/StudyGroupAnnouncementWhereUniqueInput.schema';
import { StudyGroupAnnouncementCreateInputObjectSchema } from './objects/StudyGroupAnnouncementCreateInput.schema';
import { StudyGroupAnnouncementUncheckedCreateInputObjectSchema } from './objects/StudyGroupAnnouncementUncheckedCreateInput.schema';
import { StudyGroupAnnouncementUpdateInputObjectSchema } from './objects/StudyGroupAnnouncementUpdateInput.schema';
import { StudyGroupAnnouncementUncheckedUpdateInputObjectSchema } from './objects/StudyGroupAnnouncementUncheckedUpdateInput.schema';

export const StudyGroupAnnouncementUpsertSchema = z.object({
  select: StudyGroupAnnouncementSelectObjectSchema.optional(),
  include: StudyGroupAnnouncementIncludeObjectSchema.optional(),
  where: StudyGroupAnnouncementWhereUniqueInputObjectSchema,
  create: z.union([
    StudyGroupAnnouncementCreateInputObjectSchema,
    StudyGroupAnnouncementUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    StudyGroupAnnouncementUpdateInputObjectSchema,
    StudyGroupAnnouncementUncheckedUpdateInputObjectSchema,
  ]),
});
