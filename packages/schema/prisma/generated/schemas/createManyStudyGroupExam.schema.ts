import { z } from 'zod';
import { StudyGroupExamCreateManyInputObjectSchema } from './objects/StudyGroupExamCreateManyInput.schema';

export const StudyGroupExamCreateManySchema = z.object({
  data: z.union([
    StudyGroupExamCreateManyInputObjectSchema,
    z.array(StudyGroupExamCreateManyInputObjectSchema),
  ]),
});
