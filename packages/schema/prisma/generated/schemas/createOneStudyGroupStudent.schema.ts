import { z } from 'zod';
import { StudyGroupStudentSelectObjectSchema } from './objects/StudyGroupStudentSelect.schema';
import { StudyGroupStudentIncludeObjectSchema } from './objects/StudyGroupStudentInclude.schema';
import { StudyGroupStudentCreateInputObjectSchema } from './objects/StudyGroupStudentCreateInput.schema';
import { StudyGroupStudentUncheckedCreateInputObjectSchema } from './objects/StudyGroupStudentUncheckedCreateInput.schema';

export const StudyGroupStudentCreateOneSchema = z.object({
  select: StudyGroupStudentSelectObjectSchema.optional(),
  include: StudyGroupStudentIncludeObjectSchema.optional(),
  data: z.union([
    StudyGroupStudentCreateInputObjectSchema,
    StudyGroupStudentUncheckedCreateInputObjectSchema,
  ]),
});
