import { z } from 'zod';
import { ModuleItemQuestionSelectObjectSchema } from './objects/ModuleItemQuestionSelect.schema';
import { ModuleItemQuestionIncludeObjectSchema } from './objects/ModuleItemQuestionInclude.schema';
import { ModuleItemQuestionWhereUniqueInputObjectSchema } from './objects/ModuleItemQuestionWhereUniqueInput.schema';
import { ModuleItemQuestionCreateInputObjectSchema } from './objects/ModuleItemQuestionCreateInput.schema';
import { ModuleItemQuestionUncheckedCreateInputObjectSchema } from './objects/ModuleItemQuestionUncheckedCreateInput.schema';
import { ModuleItemQuestionUpdateInputObjectSchema } from './objects/ModuleItemQuestionUpdateInput.schema';
import { ModuleItemQuestionUncheckedUpdateInputObjectSchema } from './objects/ModuleItemQuestionUncheckedUpdateInput.schema';

export const ModuleItemQuestionUpsertSchema = z.object({
  select: ModuleItemQuestionSelectObjectSchema.optional(),
  include: ModuleItemQuestionIncludeObjectSchema.optional(),
  where: ModuleItemQuestionWhereUniqueInputObjectSchema,
  create: z.union([
    ModuleItemQuestionCreateInputObjectSchema,
    ModuleItemQuestionUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ModuleItemQuestionUpdateInputObjectSchema,
    ModuleItemQuestionUncheckedUpdateInputObjectSchema,
  ]),
});
