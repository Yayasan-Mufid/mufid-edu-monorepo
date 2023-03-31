import { z } from 'zod';
import { StudyGroupAdminSelectObjectSchema } from './objects/StudyGroupAdminSelect.schema';
import { StudyGroupAdminIncludeObjectSchema } from './objects/StudyGroupAdminInclude.schema';
import { StudyGroupAdminWhereUniqueInputObjectSchema } from './objects/StudyGroupAdminWhereUniqueInput.schema';
import { StudyGroupAdminCreateInputObjectSchema } from './objects/StudyGroupAdminCreateInput.schema';
import { StudyGroupAdminUncheckedCreateInputObjectSchema } from './objects/StudyGroupAdminUncheckedCreateInput.schema';
import { StudyGroupAdminUpdateInputObjectSchema } from './objects/StudyGroupAdminUpdateInput.schema';
import { StudyGroupAdminUncheckedUpdateInputObjectSchema } from './objects/StudyGroupAdminUncheckedUpdateInput.schema';

export const StudyGroupAdminUpsertSchema = z.object({
  select: StudyGroupAdminSelectObjectSchema.optional(),
  include: StudyGroupAdminIncludeObjectSchema.optional(),
  where: StudyGroupAdminWhereUniqueInputObjectSchema,
  create: z.union([
    StudyGroupAdminCreateInputObjectSchema,
    StudyGroupAdminUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    StudyGroupAdminUpdateInputObjectSchema,
    StudyGroupAdminUncheckedUpdateInputObjectSchema,
  ]),
});
