import { z } from 'zod';
import { ModuleItemQuestionStatusCreateManyInputObjectSchema } from './objects/ModuleItemQuestionStatusCreateManyInput.schema';

export const ModuleItemQuestionStatusCreateManySchema = z.object({
  data: z.union([
    ModuleItemQuestionStatusCreateManyInputObjectSchema,
    z.array(ModuleItemQuestionStatusCreateManyInputObjectSchema),
  ]),
});
