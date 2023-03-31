import { z } from 'zod';
import { ModuleItemQuestionSelectObjectSchema } from './objects/ModuleItemQuestionSelect.schema';
import { ModuleItemQuestionIncludeObjectSchema } from './objects/ModuleItemQuestionInclude.schema';
import { ModuleItemQuestionUpdateInputObjectSchema } from './objects/ModuleItemQuestionUpdateInput.schema';
import { ModuleItemQuestionUncheckedUpdateInputObjectSchema } from './objects/ModuleItemQuestionUncheckedUpdateInput.schema';
import { ModuleItemQuestionWhereUniqueInputObjectSchema } from './objects/ModuleItemQuestionWhereUniqueInput.schema';

export const ModuleItemQuestionUpdateOneSchema = z.object({
  select: ModuleItemQuestionSelectObjectSchema.optional(),
  include: ModuleItemQuestionIncludeObjectSchema.optional(),
  data: z.union([
    ModuleItemQuestionUpdateInputObjectSchema,
    ModuleItemQuestionUncheckedUpdateInputObjectSchema,
  ]),
  where: ModuleItemQuestionWhereUniqueInputObjectSchema,
});
