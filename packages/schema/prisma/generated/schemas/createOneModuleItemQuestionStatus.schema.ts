import { z } from 'zod';
import { ModuleItemQuestionStatusSelectObjectSchema } from './objects/ModuleItemQuestionStatusSelect.schema';
import { ModuleItemQuestionStatusIncludeObjectSchema } from './objects/ModuleItemQuestionStatusInclude.schema';
import { ModuleItemQuestionStatusCreateInputObjectSchema } from './objects/ModuleItemQuestionStatusCreateInput.schema';
import { ModuleItemQuestionStatusUncheckedCreateInputObjectSchema } from './objects/ModuleItemQuestionStatusUncheckedCreateInput.schema';

export const ModuleItemQuestionStatusCreateOneSchema = z.object({
  select: ModuleItemQuestionStatusSelectObjectSchema.optional(),
  include: ModuleItemQuestionStatusIncludeObjectSchema.optional(),
  data: z.union([
    ModuleItemQuestionStatusCreateInputObjectSchema,
    ModuleItemQuestionStatusUncheckedCreateInputObjectSchema,
  ]),
});
