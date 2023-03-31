import { z } from 'zod';
import { StudyGroupExamSelectObjectSchema } from './objects/StudyGroupExamSelect.schema';
import { StudyGroupExamIncludeObjectSchema } from './objects/StudyGroupExamInclude.schema';
import { StudyGroupExamCreateInputObjectSchema } from './objects/StudyGroupExamCreateInput.schema';
import { StudyGroupExamUncheckedCreateInputObjectSchema } from './objects/StudyGroupExamUncheckedCreateInput.schema';

export const StudyGroupExamCreateOneSchema = z.object({
  select: StudyGroupExamSelectObjectSchema.optional(),
  include: StudyGroupExamIncludeObjectSchema.optional(),
  data: z.union([
    StudyGroupExamCreateInputObjectSchema,
    StudyGroupExamUncheckedCreateInputObjectSchema,
  ]),
});
