import { z } from 'zod';
import { ModuleItemQuestionWhereInputObjectSchema } from './objects/ModuleItemQuestionWhereInput.schema';

export const ModuleItemQuestionDeleteManySchema = z.object({
  where: ModuleItemQuestionWhereInputObjectSchema.optional(),
});
