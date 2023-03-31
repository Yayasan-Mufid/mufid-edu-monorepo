import { z } from 'zod';
import { StudyGroupApplicantSelectObjectSchema } from './objects/StudyGroupApplicantSelect.schema';
import { StudyGroupApplicantIncludeObjectSchema } from './objects/StudyGroupApplicantInclude.schema';
import { StudyGroupApplicantUpdateInputObjectSchema } from './objects/StudyGroupApplicantUpdateInput.schema';
import { StudyGroupApplicantUncheckedUpdateInputObjectSchema } from './objects/StudyGroupApplicantUncheckedUpdateInput.schema';
import { StudyGroupApplicantWhereUniqueInputObjectSchema } from './objects/StudyGroupApplicantWhereUniqueInput.schema';

export const StudyGroupApplicantUpdateOneSchema = z.object({
  select: StudyGroupApplicantSelectObjectSchema.optional(),
  include: StudyGroupApplicantIncludeObjectSchema.optional(),
  data: z.union([
    StudyGroupApplicantUpdateInputObjectSchema,
    StudyGroupApplicantUncheckedUpdateInputObjectSchema,
  ]),
  where: StudyGroupApplicantWhereUniqueInputObjectSchema,
});
