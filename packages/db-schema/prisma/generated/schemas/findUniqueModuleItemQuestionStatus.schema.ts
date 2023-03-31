import { z } from 'zod';
import { ModuleItemQuestionStatusSelectObjectSchema } from './objects/ModuleItemQuestionStatusSelect.schema';
import { ModuleItemQuestionStatusIncludeObjectSchema } from './objects/ModuleItemQuestionStatusInclude.schema';
import { ModuleItemQuestionStatusWhereUniqueInputObjectSchema } from './objects/ModuleItemQuestionStatusWhereUniqueInput.schema';

export const ModuleItemQuestionStatusFindUniqueSchema = z.object({
  select: ModuleItemQuestionStatusSelectObjectSchema.optional(),
  include: ModuleItemQuestionStatusIncludeObjectSchema.optional(),
  where: ModuleItemQuestionStatusWhereUniqueInputObjectSchema,
});
