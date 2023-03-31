import { z } from 'zod';
import { StudyGroupSelectObjectSchema } from './objects/StudyGroupSelect.schema';
import { StudyGroupIncludeObjectSchema } from './objects/StudyGroupInclude.schema';
import { StudyGroupOrderByWithRelationInputObjectSchema } from './objects/StudyGroupOrderByWithRelationInput.schema';
import { StudyGroupWhereInputObjectSchema } from './objects/StudyGroupWhereInput.schema';
import { StudyGroupWhereUniqueInputObjectSchema } from './objects/StudyGroupWhereUniqueInput.schema';
import { StudyGroupScalarFieldEnumSchema } from './enums/StudyGroupScalarFieldEnum.schema';

export const StudyGroupFindFirstSchema = z.object({
  select: StudyGroupSelectObjectSchema.optional(),
  include: StudyGroupIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      StudyGroupOrderByWithRelationInputObjectSchema,
      StudyGroupOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: StudyGroupWhereInputObjectSchema.optional(),
  cursor: StudyGroupWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(StudyGroupScalarFieldEnumSchema).optional(),
});
