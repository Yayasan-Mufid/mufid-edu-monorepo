import { z } from 'zod';
import { StudyGroupStudentUpdateManyMutationInputObjectSchema } from './objects/StudyGroupStudentUpdateManyMutationInput.schema';
import { StudyGroupStudentWhereInputObjectSchema } from './objects/StudyGroupStudentWhereInput.schema';

export const StudyGroupStudentUpdateManySchema = z.object({
  data: StudyGroupStudentUpdateManyMutationInputObjectSchema,
  where: StudyGroupStudentWhereInputObjectSchema.optional(),
});
