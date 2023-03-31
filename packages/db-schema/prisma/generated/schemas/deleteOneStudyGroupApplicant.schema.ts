import { z } from 'zod';
import { StudyGroupApplicantSelectObjectSchema } from './objects/StudyGroupApplicantSelect.schema';
import { StudyGroupApplicantIncludeObjectSchema } from './objects/StudyGroupApplicantInclude.schema';
import { StudyGroupApplicantWhereUniqueInputObjectSchema } from './objects/StudyGroupApplicantWhereUniqueInput.schema';

export const StudyGroupApplicantDeleteOneSchema = z.object({
  select: StudyGroupApplicantSelectObjectSchema.optional(),
  include: StudyGroupApplicantIncludeObjectSchema.optional(),
  where: StudyGroupApplicantWhereUniqueInputObjectSchema,
});
