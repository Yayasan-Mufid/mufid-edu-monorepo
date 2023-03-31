import { z } from 'zod';
import { StudyGroupExamUpdateManyMutationInputObjectSchema } from './objects/StudyGroupExamUpdateManyMutationInput.schema';
import { StudyGroupExamWhereInputObjectSchema } from './objects/StudyGroupExamWhereInput.schema';

export const StudyGroupExamUpdateManySchema = z.object({
  data: StudyGroupExamUpdateManyMutationInputObjectSchema,
  where: StudyGroupExamWhereInputObjectSchema.optional(),
});
