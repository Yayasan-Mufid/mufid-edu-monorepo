import { z } from 'zod';
import { StudyGroupScheduleWhereInputObjectSchema } from './objects/StudyGroupScheduleWhereInput.schema';

export const StudyGroupScheduleDeleteManySchema = z.object({
  where: StudyGroupScheduleWhereInputObjectSchema.optional(),
});
