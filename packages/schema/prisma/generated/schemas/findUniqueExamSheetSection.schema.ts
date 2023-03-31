import { z } from 'zod';
import { ExamSheetSectionSelectObjectSchema } from './objects/ExamSheetSectionSelect.schema';
import { ExamSheetSectionIncludeObjectSchema } from './objects/ExamSheetSectionInclude.schema';
import { ExamSheetSectionWhereUniqueInputObjectSchema } from './objects/ExamSheetSectionWhereUniqueInput.schema';

export const ExamSheetSectionFindUniqueSchema = z.object({
  select: ExamSheetSectionSelectObjectSchema.optional(),
  include: ExamSheetSectionIncludeObjectSchema.optional(),
  where: ExamSheetSectionWhereUniqueInputObjectSchema,
});
