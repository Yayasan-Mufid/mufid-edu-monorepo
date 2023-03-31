import { z } from 'zod';
import { StudyGroupScheduleUpdateManyMutationInputObjectSchema } from './objects/StudyGroupScheduleUpdateManyMutationInput.schema';
import { StudyGroupScheduleWhereInputObjectSchema } from './objects/StudyGroupScheduleWhereInput.schema';

export const StudyGroupScheduleUpdateManySchema = z.object({
  data: StudyGroupScheduleUpdateManyMutationInputObjectSchema,
  where: StudyGroupScheduleWhereInputObjectSchema.optional(),
});
