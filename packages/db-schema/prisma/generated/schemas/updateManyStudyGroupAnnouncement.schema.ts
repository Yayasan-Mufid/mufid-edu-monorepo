import { z } from 'zod';
import { StudyGroupAnnouncementUpdateManyMutationInputObjectSchema } from './objects/StudyGroupAnnouncementUpdateManyMutationInput.schema';
import { StudyGroupAnnouncementWhereInputObjectSchema } from './objects/StudyGroupAnnouncementWhereInput.schema';

export const StudyGroupAnnouncementUpdateManySchema = z.object({
  data: StudyGroupAnnouncementUpdateManyMutationInputObjectSchema,
  where: StudyGroupAnnouncementWhereInputObjectSchema.optional(),
});
