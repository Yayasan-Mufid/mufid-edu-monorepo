import { z } from 'zod';
import { StudyGroupSelectObjectSchema } from './objects/StudyGroupSelect.schema';
import { StudyGroupIncludeObjectSchema } from './objects/StudyGroupInclude.schema';
import { StudyGroupWhereUniqueInputObjectSchema } from './objects/StudyGroupWhereUniqueInput.schema';

export const StudyGroupFindUniqueSchema = z.object({
  select: StudyGroupSelectObjectSchema.optional(),
  include: StudyGroupIncludeObjectSchema.optional(),
  where: StudyGroupWhereUniqueInputObjectSchema,
});
