import { z } from 'zod';
import { StudyGroupExamWhereInputObjectSchema } from './objects/StudyGroupExamWhereInput.schema';

export const StudyGroupExamDeleteManySchema = z.object({
  where: StudyGroupExamWhereInputObjectSchema.optional(),
});
