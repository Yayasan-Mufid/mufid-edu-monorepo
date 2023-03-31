import { z } from 'zod';
import { StudyGroupStudentSelectObjectSchema } from './objects/StudyGroupStudentSelect.schema';
import { StudyGroupStudentIncludeObjectSchema } from './objects/StudyGroupStudentInclude.schema';
import { StudyGroupStudentWhereUniqueInputObjectSchema } from './objects/StudyGroupStudentWhereUniqueInput.schema';

export const StudyGroupStudentFindUniqueSchema = z.object({
  select: StudyGroupStudentSelectObjectSchema.optional(),
  include: StudyGroupStudentIncludeObjectSchema.optional(),
  where: StudyGroupStudentWhereUniqueInputObjectSchema,
});
