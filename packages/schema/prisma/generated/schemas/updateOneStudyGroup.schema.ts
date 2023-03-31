import { z } from 'zod';
import { StudyGroupSelectObjectSchema } from './objects/StudyGroupSelect.schema';
import { StudyGroupIncludeObjectSchema } from './objects/StudyGroupInclude.schema';
import { StudyGroupUpdateInputObjectSchema } from './objects/StudyGroupUpdateInput.schema';
import { StudyGroupUncheckedUpdateInputObjectSchema } from './objects/StudyGroupUncheckedUpdateInput.schema';
import { StudyGroupWhereUniqueInputObjectSchema } from './objects/StudyGroupWhereUniqueInput.schema';

export const StudyGroupUpdateOneSchema = z.object({
  select: StudyGroupSelectObjectSchema.optional(),
  include: StudyGroupIncludeObjectSchema.optional(),
  data: z.union([
    StudyGroupUpdateInputObjectSchema,
    StudyGroupUncheckedUpdateInputObjectSchema,
  ]),
  where: StudyGroupWhereUniqueInputObjectSchema,
});
