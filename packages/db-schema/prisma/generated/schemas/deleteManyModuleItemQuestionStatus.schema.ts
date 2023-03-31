import { z } from 'zod';
import { ModuleItemQuestionStatusWhereInputObjectSchema } from './objects/ModuleItemQuestionStatusWhereInput.schema';

export const ModuleItemQuestionStatusDeleteManySchema = z.object({
  where: ModuleItemQuestionStatusWhereInputObjectSchema.optional(),
});
