import { z } from 'zod';
import { StudyGroupAdminSelectObjectSchema } from './objects/StudyGroupAdminSelect.schema';
import { StudyGroupAdminIncludeObjectSchema } from './objects/StudyGroupAdminInclude.schema';
import { StudyGroupAdminWhereUniqueInputObjectSchema } from './objects/StudyGroupAdminWhereUniqueInput.schema';

export const StudyGroupAdminFindUniqueSchema = z.object({
  select: StudyGroupAdminSelectObjectSchema.optional(),
  include: StudyGroupAdminIncludeObjectSchema.optional(),
  where: StudyGroupAdminWhereUniqueInputObjectSchema,
});
