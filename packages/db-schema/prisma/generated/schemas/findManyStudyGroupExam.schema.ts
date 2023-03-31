import { z } from 'zod';
import { StudyGroupExamSelectObjectSchema } from './objects/StudyGroupExamSelect.schema';
import { StudyGroupExamIncludeObjectSchema } from './objects/StudyGroupExamInclude.schema';
import { StudyGroupExamOrderByWithRelationInputObjectSchema } from './objects/StudyGroupExamOrderByWithRelationInput.schema';
import { StudyGroupExamWhereInputObjectSchema } from './objects/StudyGroupExamWhereInput.schema';
import { StudyGroupExamWhereUniqueInputObjectSchema } from './objects/StudyGroupExamWhereUniqueInput.schema';
import { StudyGroupExamScalarFieldEnumSchema } from './enums/StudyGroupExamScalarFieldEnum.schema';

export const StudyGroupExamFindManySchema = z.object({
  select: z.lazy(() => StudyGroupExamSelectObjectSchema.optional()),
  include: z.lazy(() => StudyGroupExamIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      StudyGroupExamOrderByWithRelationInputObjectSchema,
      StudyGroupExamOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: StudyGroupExamWhereInputObjectSchema.optional(),
  cursor: StudyGroupExamWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(StudyGroupExamScalarFieldEnumSchema).optional(),
});
