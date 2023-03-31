import { z } from 'zod';
import { StudyGroupApplicantCreateManyInputObjectSchema } from './objects/StudyGroupApplicantCreateManyInput.schema';

export const StudyGroupApplicantCreateManySchema = z.object({
  data: z.union([
    StudyGroupApplicantCreateManyInputObjectSchema,
    z.array(StudyGroupApplicantCreateManyInputObjectSchema),
  ]),
});
