import { z } from 'zod';
import { StudyGroupAnnouncementWhereInputObjectSchema } from './objects/StudyGroupAnnouncementWhereInput.schema';

export const StudyGroupAnnouncementDeleteManySchema = z.object({
  where: StudyGroupAnnouncementWhereInputObjectSchema.optional(),
});
