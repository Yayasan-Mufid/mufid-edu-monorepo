import { z } from 'zod';
import { StudyGroupStudentWhereInputObjectSchema } from './objects/StudyGroupStudentWhereInput.schema';

export const StudyGroupStudentDeleteManySchema = z.object({
  where: StudyGroupStudentWhereInputObjectSchema.optional(),
});
