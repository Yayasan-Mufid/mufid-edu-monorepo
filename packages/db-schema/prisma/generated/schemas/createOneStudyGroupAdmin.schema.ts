import { z } from 'zod';
import { StudyGroupAdminSelectObjectSchema } from './objects/StudyGroupAdminSelect.schema';
import { StudyGroupAdminIncludeObjectSchema } from './objects/StudyGroupAdminInclude.schema';
import { StudyGroupAdminCreateInputObjectSchema } from './objects/StudyGroupAdminCreateInput.schema';
import { StudyGroupAdminUncheckedCreateInputObjectSchema } from './objects/StudyGroupAdminUncheckedCreateInput.schema';

export const StudyGroupAdminCreateOneSchema = z.object({
  select: StudyGroupAdminSelectObjectSchema.optional(),
  include: StudyGroupAdminIncludeObjectSchema.optional(),
  data: z.union([
    StudyGroupAdminCreateInputObjectSchema,
    StudyGroupAdminUncheckedCreateInputObjectSchema,
  ]),
});
