import { z } from 'zod';
import { ModuleItemQuestionSelectObjectSchema } from './objects/ModuleItemQuestionSelect.schema';
import { ModuleItemQuestionIncludeObjectSchema } from './objects/ModuleItemQuestionInclude.schema';
import { ModuleItemQuestionWhereUniqueInputObjectSchema } from './objects/ModuleItemQuestionWhereUniqueInput.schema';

export const ModuleItemQuestionFindUniqueSchema = z.object({
  select: ModuleItemQuestionSelectObjectSchema.optional(),
  include: ModuleItemQuestionIncludeObjectSchema.optional(),
  where: ModuleItemQuestionWhereUniqueInputObjectSchema,
});
