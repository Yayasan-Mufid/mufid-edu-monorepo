import { z } from 'zod';
import { StudyGroupApplicantWhereInputObjectSchema } from './objects/StudyGroupApplicantWhereInput.schema';

export const StudyGroupApplicantDeleteManySchema = z.object({
  where: StudyGroupApplicantWhereInputObjectSchema.optional(),
});
