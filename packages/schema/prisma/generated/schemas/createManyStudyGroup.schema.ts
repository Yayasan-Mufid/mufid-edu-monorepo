import { z } from 'zod';
import { StudyGroupCreateManyInputObjectSchema } from './objects/StudyGroupCreateManyInput.schema';

export const StudyGroupCreateManySchema = z.object({
  data: z.union([
    StudyGroupCreateManyInputObjectSchema,
    z.array(StudyGroupCreateManyInputObjectSchema),
  ]),
});
