import { z } from 'zod';
import { ModuleItemQuestionUpdateManyMutationInputObjectSchema } from './objects/ModuleItemQuestionUpdateManyMutationInput.schema';
import { ModuleItemQuestionWhereInputObjectSchema } from './objects/ModuleItemQuestionWhereInput.schema';

export const ModuleItemQuestionUpdateManySchema = z.object({
  data: ModuleItemQuestionUpdateManyMutationInputObjectSchema,
  where: ModuleItemQuestionWhereInputObjectSchema.optional(),
});
