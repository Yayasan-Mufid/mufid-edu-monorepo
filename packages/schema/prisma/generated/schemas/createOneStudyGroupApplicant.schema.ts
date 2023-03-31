import { z } from 'zod';
import { StudyGroupApplicantSelectObjectSchema } from './objects/StudyGroupApplicantSelect.schema';
import { StudyGroupApplicantIncludeObjectSchema } from './objects/StudyGroupApplicantInclude.schema';
import { StudyGroupApplicantCreateInputObjectSchema } from './objects/StudyGroupApplicantCreateInput.schema';
import { StudyGroupApplicantUncheckedCreateInputObjectSchema } from './objects/StudyGroupApplicantUncheckedCreateInput.schema';

export const StudyGroupApplicantCreateOneSchema = z.object({
  select: StudyGroupApplicantSelectObjectSchema.optional(),
  include: StudyGroupApplicantIncludeObjectSchema.optional(),
  data: z.union([
    StudyGroupApplicantCreateInputObjectSchema,
    StudyGroupApplicantUncheckedCreateInputObjectSchema,
  ]),
});
