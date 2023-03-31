import { z } from 'zod';
import { StudyGroupAdminUpdateManyMutationInputObjectSchema } from './objects/StudyGroupAdminUpdateManyMutationInput.schema';
import { StudyGroupAdminWhereInputObjectSchema } from './objects/StudyGroupAdminWhereInput.schema';

export const StudyGroupAdminUpdateManySchema = z.object({
  data: StudyGroupAdminUpdateManyMutationInputObjectSchema,
  where: StudyGroupAdminWhereInputObjectSchema.optional(),
});
