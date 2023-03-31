import { z } from 'zod';
import { StudyGroupAdminSelectObjectSchema } from './objects/StudyGroupAdminSelect.schema';
import { StudyGroupAdminIncludeObjectSchema } from './objects/StudyGroupAdminInclude.schema';
import { StudyGroupAdminUpdateInputObjectSchema } from './objects/StudyGroupAdminUpdateInput.schema';
import { StudyGroupAdminUncheckedUpdateInputObjectSchema } from './objects/StudyGroupAdminUncheckedUpdateInput.schema';
import { StudyGroupAdminWhereUniqueInputObjectSchema } from './objects/StudyGroupAdminWhereUniqueInput.schema';

export const StudyGroupAdminUpdateOneSchema = z.object({
  select: StudyGroupAdminSelectObjectSchema.optional(),
  include: StudyGroupAdminIncludeObjectSchema.optional(),
  data: z.union([
    StudyGroupAdminUpdateInputObjectSchema,
    StudyGroupAdminUncheckedUpdateInputObjectSchema,
  ]),
  where: StudyGroupAdminWhereUniqueInputObjectSchema,
});
