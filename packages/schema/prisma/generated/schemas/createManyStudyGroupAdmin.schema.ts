import { z } from 'zod';
import { StudyGroupAdminCreateManyInputObjectSchema } from './objects/StudyGroupAdminCreateManyInput.schema';

export const StudyGroupAdminCreateManySchema = z.object({
  data: z.union([
    StudyGroupAdminCreateManyInputObjectSchema,
    z.array(StudyGroupAdminCreateManyInputObjectSchema),
  ]),
});
