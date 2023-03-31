import { z } from 'zod';
import { StudyGroupApplicantUpdateManyMutationInputObjectSchema } from './objects/StudyGroupApplicantUpdateManyMutationInput.schema';
import { StudyGroupApplicantWhereInputObjectSchema } from './objects/StudyGroupApplicantWhereInput.schema';

export const StudyGroupApplicantUpdateManySchema = z.object({
  data: StudyGroupApplicantUpdateManyMutationInputObjectSchema,
  where: StudyGroupApplicantWhereInputObjectSchema.optional(),
});
