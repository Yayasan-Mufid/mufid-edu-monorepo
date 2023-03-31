import { z } from 'zod';
import { StudyGroupWhereInputObjectSchema } from './objects/StudyGroupWhereInput.schema';

export const StudyGroupDeleteManySchema = z.object({
  where: StudyGroupWhereInputObjectSchema.optional(),
});
