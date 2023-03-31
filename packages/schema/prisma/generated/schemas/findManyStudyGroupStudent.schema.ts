import { z } from 'zod';
import { StudyGroupStudentSelectObjectSchema } from './objects/StudyGroupStudentSelect.schema';
import { StudyGroupStudentIncludeObjectSchema } from './objects/StudyGroupStudentInclude.schema';
import { StudyGroupStudentOrderByWithRelationInputObjectSchema } from './objects/StudyGroupStudentOrderByWithRelationInput.schema';
import { StudyGroupStudentWhereInputObjectSchema } from './objects/StudyGroupStudentWhereInput.schema';
import { StudyGroupStudentWhereUniqueInputObjectSchema } from './objects/StudyGroupStudentWhereUniqueInput.schema';
import { StudyGroupStudentScalarFieldEnumSchema } from './enums/StudyGroupStudentScalarFieldEnum.schema';

export const StudyGroupStudentFindManySchema = z.object({
  select: z.lazy(() => StudyGroupStudentSelectObjectSchema.optional()),
  include: z.lazy(() => StudyGroupStudentIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      StudyGroupStudentOrderByWithRelationInputObjectSchema,
      StudyGroupStudentOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: StudyGroupStudentWhereInputObjectSchema.optional(),
  cursor: StudyGroupStudentWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(StudyGroupStudentScalarFieldEnumSchema).optional(),
});
