import { z } from 'zod';
import { StudyGroupScheduleCreateManyInputObjectSchema } from './objects/StudyGroupScheduleCreateManyInput.schema';

export const StudyGroupScheduleCreateManySchema = z.object({
  data: z.union([
    StudyGroupScheduleCreateManyInputObjectSchema,
    z.array(StudyGroupScheduleCreateManyInputObjectSchema),
  ]),
});
