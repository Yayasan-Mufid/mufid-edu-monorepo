import { z } from 'zod';
import { StudyGroupAdminWhereInputObjectSchema } from './objects/StudyGroupAdminWhereInput.schema';

export const StudyGroupAdminDeleteManySchema = z.object({
  where: StudyGroupAdminWhereInputObjectSchema.optional(),
});
