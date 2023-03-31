import { z } from 'zod';
import { StudyGroupExamSelectObjectSchema } from './objects/StudyGroupExamSelect.schema';
import { StudyGroupExamIncludeObjectSchema } from './objects/StudyGroupExamInclude.schema';
import { StudyGroupExamUpdateInputObjectSchema } from './objects/StudyGroupExamUpdateInput.schema';
import { StudyGroupExamUncheckedUpdateInputObjectSchema } from './objects/StudyGroupExamUncheckedUpdateInput.schema';
import { StudyGroupExamWhereUniqueInputObjectSchema } from './objects/StudyGroupExamWhereUniqueInput.schema';

export const StudyGroupExamUpdateOneSchema = z.object({
  select: StudyGroupExamSelectObjectSchema.optional(),
  include: StudyGroupExamIncludeObjectSchema.optional(),
  data: z.union([
    StudyGroupExamUpdateInputObjectSchema,
    StudyGroupExamUncheckedUpdateInputObjectSchema,
  ]),
  where: StudyGroupExamWhereUniqueInputObjectSchema,
});
