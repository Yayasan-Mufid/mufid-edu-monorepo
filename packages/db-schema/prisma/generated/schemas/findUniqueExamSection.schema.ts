import { z } from 'zod';
import { ExamSectionSelectObjectSchema } from './objects/ExamSectionSelect.schema';
import { ExamSectionIncludeObjectSchema } from './objects/ExamSectionInclude.schema';
import { ExamSectionWhereUniqueInputObjectSchema } from './objects/ExamSectionWhereUniqueInput.schema';

export const ExamSectionFindUniqueSchema = z.object({
  select: ExamSectionSelectObjectSchema.optional(),
  include: ExamSectionIncludeObjectSchema.optional(),
  where: ExamSectionWhereUniqueInputObjectSchema,
});
