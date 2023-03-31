import { z } from 'zod';
import { StudyGroupExamSelectObjectSchema } from './objects/StudyGroupExamSelect.schema';
import { StudyGroupExamIncludeObjectSchema } from './objects/StudyGroupExamInclude.schema';
import { StudyGroupExamWhereUniqueInputObjectSchema } from './objects/StudyGroupExamWhereUniqueInput.schema';
import { StudyGroupExamCreateInputObjectSchema } from './objects/StudyGroupExamCreateInput.schema';
import { StudyGroupExamUncheckedCreateInputObjectSchema } from './objects/StudyGroupExamUncheckedCreateInput.schema';
import { StudyGroupExamUpdateInputObjectSchema } from './objects/StudyGroupExamUpdateInput.schema';
import { StudyGroupExamUncheckedUpdateInputObjectSchema } from './objects/StudyGroupExamUncheckedUpdateInput.schema';

export const StudyGroupExamUpsertSchema = z.object({
  select: StudyGroupExamSelectObjectSchema.optional(),
  include: StudyGroupExamIncludeObjectSchema.optional(),
  where: StudyGroupExamWhereUniqueInputObjectSchema,
  create: z.union([
    StudyGroupExamCreateInputObjectSchema,
    StudyGroupExamUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    StudyGroupExamUpdateInputObjectSchema,
    StudyGroupExamUncheckedUpdateInputObjectSchema,
  ]),
});
