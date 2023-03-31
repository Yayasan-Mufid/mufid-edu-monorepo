import { z } from 'zod';
import { StudyGroupAnnouncementCreateManyInputObjectSchema } from './objects/StudyGroupAnnouncementCreateManyInput.schema';

export const StudyGroupAnnouncementCreateManySchema = z.object({
  data: z.union([
    StudyGroupAnnouncementCreateManyInputObjectSchema,
    z.array(StudyGroupAnnouncementCreateManyInputObjectSchema),
  ]),
});
