import { z } from 'zod';
import { StudyGroupStudentCreateManyInputObjectSchema } from './objects/StudyGroupStudentCreateManyInput.schema';

export const StudyGroupStudentCreateManySchema = z.object({
  data: z.union([
    StudyGroupStudentCreateManyInputObjectSchema,
    z.array(StudyGroupStudentCreateManyInputObjectSchema),
  ]),
});
