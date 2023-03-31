import { z } from 'zod';
import { StudyGroupAdminSelectObjectSchema } from './objects/StudyGroupAdminSelect.schema';
import { StudyGroupAdminIncludeObjectSchema } from './objects/StudyGroupAdminInclude.schema';
import { StudyGroupAdminOrderByWithRelationInputObjectSchema } from './objects/StudyGroupAdminOrderByWithRelationInput.schema';
import { StudyGroupAdminWhereInputObjectSchema } from './objects/StudyGroupAdminWhereInput.schema';
import { StudyGroupAdminWhereUniqueInputObjectSchema } from './objects/StudyGroupAdminWhereUniqueInput.schema';
import { StudyGroupAdminScalarFieldEnumSchema } from './enums/StudyGroupAdminScalarFieldEnum.schema';

export const StudyGroupAdminFindFirstSchema = z.object({
  select: StudyGroupAdminSelectObjectSchema.optional(),
  include: StudyGroupAdminIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      StudyGroupAdminOrderByWithRelationInputObjectSchema,
      StudyGroupAdminOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: StudyGroupAdminWhereInputObjectSchema.optional(),
  cursor: StudyGroupAdminWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(StudyGroupAdminScalarFieldEnumSchema).optional(),
});
