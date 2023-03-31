import { z } from 'zod';
import { StudyGroupUpdateManyMutationInputObjectSchema } from './objects/StudyGroupUpdateManyMutationInput.schema';
import { StudyGroupWhereInputObjectSchema } from './objects/StudyGroupWhereInput.schema';

export const StudyGroupUpdateManySchema = z.object({
  data: StudyGroupUpdateManyMutationInputObjectSchema,
  where: StudyGroupWhereInputObjectSchema.optional(),
});
