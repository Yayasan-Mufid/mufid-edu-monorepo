import { z } from 'zod';
import { ModuleItemQuestionSelectObjectSchema } from './objects/ModuleItemQuestionSelect.schema';
import { ModuleItemQuestionIncludeObjectSchema } from './objects/ModuleItemQuestionInclude.schema';
import { ModuleItemQuestionCreateInputObjectSchema } from './objects/ModuleItemQuestionCreateInput.schema';
import { ModuleItemQuestionUncheckedCreateInputObjectSchema } from './objects/ModuleItemQuestionUncheckedCreateInput.schema';

export const ModuleItemQuestionCreateOneSchema = z.object({
  select: ModuleItemQuestionSelectObjectSchema.optional(),
  include: ModuleItemQuestionIncludeObjectSchema.optional(),
  data: z.union([
    ModuleItemQuestionCreateInputObjectSchema,
    ModuleItemQuestionUncheckedCreateInputObjectSchema,
  ]),
});
