import { z } from 'zod';
import { ModuleItemQuestionStatusSelectObjectSchema } from './objects/ModuleItemQuestionStatusSelect.schema';
import { ModuleItemQuestionStatusIncludeObjectSchema } from './objects/ModuleItemQuestionStatusInclude.schema';
import { ModuleItemQuestionStatusWhereUniqueInputObjectSchema } from './objects/ModuleItemQuestionStatusWhereUniqueInput.schema';
import { ModuleItemQuestionStatusCreateInputObjectSchema } from './objects/ModuleItemQuestionStatusCreateInput.schema';
import { ModuleItemQuestionStatusUncheckedCreateInputObjectSchema } from './objects/ModuleItemQuestionStatusUncheckedCreateInput.schema';
import { ModuleItemQuestionStatusUpdateInputObjectSchema } from './objects/ModuleItemQuestionStatusUpdateInput.schema';
import { ModuleItemQuestionStatusUncheckedUpdateInputObjectSchema } from './objects/ModuleItemQuestionStatusUncheckedUpdateInput.schema';

export const ModuleItemQuestionStatusUpsertSchema = z.object({
  select: ModuleItemQuestionStatusSelectObjectSchema.optional(),
  include: ModuleItemQuestionStatusIncludeObjectSchema.optional(),
  where: ModuleItemQuestionStatusWhereUniqueInputObjectSchema,
  create: z.union([
    ModuleItemQuestionStatusCreateInputObjectSchema,
    ModuleItemQuestionStatusUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ModuleItemQuestionStatusUpdateInputObjectSchema,
    ModuleItemQuestionStatusUncheckedUpdateInputObjectSchema,
  ]),
});
