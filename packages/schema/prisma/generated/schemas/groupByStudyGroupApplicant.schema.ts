import { z } from 'zod';
import { StudyGroupApplicantWhereInputObjectSchema } from './objects/StudyGroupApplicantWhereInput.schema';
import { StudyGroupApplicantOrderByWithAggregationInputObjectSchema } from './objects/StudyGroupApplicantOrderByWithAggregationInput.schema';
import { StudyGroupApplicantScalarWhereWithAggregatesInputObjectSchema } from './objects/StudyGroupApplicantScalarWhereWithAggregatesInput.schema';
import { StudyGroupApplicantScalarFieldEnumSchema } from './enums/StudyGroupApplicantScalarFieldEnum.schema';

export const StudyGroupApplicantGroupBySchema = z.object({
  where: StudyGroupApplicantWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      StudyGroupApplicantOrderByWithAggregationInputObjectSchema,
      StudyGroupApplicantOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    StudyGroupApplicantScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(StudyGroupApplicantScalarFieldEnumSchema),
});
