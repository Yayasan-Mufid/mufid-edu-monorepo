import { z } from 'zod';
import { StudyGroupExamSelectObjectSchema } from './objects/StudyGroupExamSelect.schema';
import { StudyGroupExamIncludeObjectSchema } from './objects/StudyGroupExamInclude.schema';
import { StudyGroupExamWhereUniqueInputObjectSchema } from './objects/StudyGroupExamWhereUniqueInput.schema';

export const StudyGroupExamDeleteOneSchema = z.object({
  select: StudyGroupExamSelectObjectSchema.optional(),
  include: StudyGroupExamIncludeObjectSchema.optional(),
  where: StudyGroupExamWhereUniqueInputObjectSchema,
});
