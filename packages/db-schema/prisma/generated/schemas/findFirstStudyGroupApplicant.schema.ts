import { z } from 'zod';
import { StudyGroupApplicantSelectObjectSchema } from './objects/StudyGroupApplicantSelect.schema';
import { StudyGroupApplicantIncludeObjectSchema } from './objects/StudyGroupApplicantInclude.schema';
import { StudyGroupApplicantOrderByWithRelationInputObjectSchema } from './objects/StudyGroupApplicantOrderByWithRelationInput.schema';
import { StudyGroupApplicantWhereInputObjectSchema } from './objects/StudyGroupApplicantWhereInput.schema';
import { StudyGroupApplicantWhereUniqueInputObjectSchema } from './objects/StudyGroupApplicantWhereUniqueInput.schema';
import { StudyGroupApplicantScalarFieldEnumSchema } from './enums/StudyGroupApplicantScalarFieldEnum.schema';

export const StudyGroupApplicantFindFirstSchema = z.object({
  select: StudyGroupApplicantSelectObjectSchema.optional(),
  include: StudyGroupApplicantIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      StudyGroupApplicantOrderByWithRelationInputObjectSchema,
      StudyGroupApplicantOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: StudyGroupApplicantWhereInputObjectSchema.optional(),
  cursor: StudyGroupApplicantWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(StudyGroupApplicantScalarFieldEnumSchema).optional(),
});
