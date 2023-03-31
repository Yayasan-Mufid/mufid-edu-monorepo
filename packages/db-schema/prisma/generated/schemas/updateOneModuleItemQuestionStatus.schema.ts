import { z } from 'zod';
import { ModuleItemQuestionStatusSelectObjectSchema } from './objects/ModuleItemQuestionStatusSelect.schema';
import { ModuleItemQuestionStatusIncludeObjectSchema } from './objects/ModuleItemQuestionStatusInclude.schema';
import { ModuleItemQuestionStatusUpdateInputObjectSchema } from './objects/ModuleItemQuestionStatusUpdateInput.schema';
import { ModuleItemQuestionStatusUncheckedUpdateInputObjectSchema } from './objects/ModuleItemQuestionStatusUncheckedUpdateInput.schema';
import { ModuleItemQuestionStatusWhereUniqueInputObjectSchema } from './objects/ModuleItemQuestionStatusWhereUniqueInput.schema';

export const ModuleItemQuestionStatusUpdateOneSchema = z.object({
  select: ModuleItemQuestionStatusSelectObjectSchema.optional(),
  include: ModuleItemQuestionStatusIncludeObjectSchema.optional(),
  data: z.union([
    ModuleItemQuestionStatusUpdateInputObjectSchema,
    ModuleItemQuestionStatusUncheckedUpdateInputObjectSchema,
  ]),
  where: ModuleItemQuestionStatusWhereUniqueInputObjectSchema,
});
