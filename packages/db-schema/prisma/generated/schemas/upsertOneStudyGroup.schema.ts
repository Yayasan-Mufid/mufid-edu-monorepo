import { z } from 'zod';
import { StudyGroupSelectObjectSchema } from './objects/StudyGroupSelect.schema';
import { StudyGroupIncludeObjectSchema } from './objects/StudyGroupInclude.schema';
import { StudyGroupWhereUniqueInputObjectSchema } from './objects/StudyGroupWhereUniqueInput.schema';
import { StudyGroupCreateInputObjectSchema } from './objects/StudyGroupCreateInput.schema';
import { StudyGroupUncheckedCreateInputObjectSchema } from './objects/StudyGroupUncheckedCreateInput.schema';
import { StudyGroupUpdateInputObjectSchema } from './objects/StudyGroupUpdateInput.schema';
import { StudyGroupUncheckedUpdateInputObjectSchema } from './objects/StudyGroupUncheckedUpdateInput.schema';

export const StudyGroupUpsertSchema = z.object({
  select: StudyGroupSelectObjectSchema.optional(),
  include: StudyGroupIncludeObjectSchema.optional(),
  where: StudyGroupWhereUniqueInputObjectSchema,
  create: z.union([
    StudyGroupCreateInputObjectSchema,
    StudyGroupUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    StudyGroupUpdateInputObjectSchema,
    StudyGroupUncheckedUpdateInputObjectSchema,
  ]),
});
