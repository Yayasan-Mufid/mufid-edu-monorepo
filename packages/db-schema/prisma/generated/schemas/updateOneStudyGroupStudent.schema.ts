import { z } from 'zod';
import { StudyGroupStudentSelectObjectSchema } from './objects/StudyGroupStudentSelect.schema';
import { StudyGroupStudentIncludeObjectSchema } from './objects/StudyGroupStudentInclude.schema';
import { StudyGroupStudentUpdateInputObjectSchema } from './objects/StudyGroupStudentUpdateInput.schema';
import { StudyGroupStudentUncheckedUpdateInputObjectSchema } from './objects/StudyGroupStudentUncheckedUpdateInput.schema';
import { StudyGroupStudentWhereUniqueInputObjectSchema } from './objects/StudyGroupStudentWhereUniqueInput.schema';

export const StudyGroupStudentUpdateOneSchema = z.object({
  select: StudyGroupStudentSelectObjectSchema.optional(),
  include: StudyGroupStudentIncludeObjectSchema.optional(),
  data: z.union([
    StudyGroupStudentUpdateInputObjectSchema,
    StudyGroupStudentUncheckedUpdateInputObjectSchema,
  ]),
  where: StudyGroupStudentWhereUniqueInputObjectSchema,
});
