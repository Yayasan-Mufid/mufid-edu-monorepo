import { z } from 'zod';
import { ModuleItemQuestionCreateManyInputObjectSchema } from './objects/ModuleItemQuestionCreateManyInput.schema';

export const ModuleItemQuestionCreateManySchema = z.object({
  data: z.union([
    ModuleItemQuestionCreateManyInputObjectSchema,
    z.array(ModuleItemQuestionCreateManyInputObjectSchema),
  ]),
});
