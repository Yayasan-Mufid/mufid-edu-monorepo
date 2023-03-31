import { z } from 'zod';
import { StudyGroupSelectObjectSchema } from './objects/StudyGroupSelect.schema';
import { StudyGroupIncludeObjectSchema } from './objects/StudyGroupInclude.schema';
import { StudyGroupCreateInputObjectSchema } from './objects/StudyGroupCreateInput.schema';
import { StudyGroupUncheckedCreateInputObjectSchema } from './objects/StudyGroupUncheckedCreateInput.schema';

export const StudyGroupCreateOneSchema = z.object({
  select: StudyGroupSelectObjectSchema.optional(),
  include: StudyGroupIncludeObjectSchema.optional(),
  data: z.union([
    StudyGroupCreateInputObjectSchema,
    StudyGroupUncheckedCreateInputObjectSchema,
  ]),
});
