import { z } from 'zod';
import { StudyGroupStudentSelectObjectSchema } from './objects/StudyGroupStudentSelect.schema';
import { StudyGroupStudentIncludeObjectSchema } from './objects/StudyGroupStudentInclude.schema';
import { StudyGroupStudentWhereUniqueInputObjectSchema } from './objects/StudyGroupStudentWhereUniqueInput.schema';
import { StudyGroupStudentCreateInputObjectSchema } from './objects/StudyGroupStudentCreateInput.schema';
import { StudyGroupStudentUncheckedCreateInputObjectSchema } from './objects/StudyGroupStudentUncheckedCreateInput.schema';
import { StudyGroupStudentUpdateInputObjectSchema } from './objects/StudyGroupStudentUpdateInput.schema';
import { StudyGroupStudentUncheckedUpdateInputObjectSchema } from './objects/StudyGroupStudentUncheckedUpdateInput.schema';

export const StudyGroupStudentUpsertSchema = z.object({
  select: StudyGroupStudentSelectObjectSchema.optional(),
  include: StudyGroupStudentIncludeObjectSchema.optional(),
  where: StudyGroupStudentWhereUniqueInputObjectSchema,
  create: z.union([
    StudyGroupStudentCreateInputObjectSchema,
    StudyGroupStudentUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    StudyGroupStudentUpdateInputObjectSchema,
    StudyGroupStudentUncheckedUpdateInputObjectSchema,
  ]),
});
