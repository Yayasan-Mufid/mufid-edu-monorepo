import { z } from 'zod';
import { ModuleItemQuestionStatusUpdateManyMutationInputObjectSchema } from './objects/ModuleItemQuestionStatusUpdateManyMutationInput.schema';
import { ModuleItemQuestionStatusWhereInputObjectSchema } from './objects/ModuleItemQuestionStatusWhereInput.schema';

export const ModuleItemQuestionStatusUpdateManySchema = z.object({
  data: ModuleItemQuestionStatusUpdateManyMutationInputObjectSchema,
  where: ModuleItemQuestionStatusWhereInputObjectSchema.optional(),
});
