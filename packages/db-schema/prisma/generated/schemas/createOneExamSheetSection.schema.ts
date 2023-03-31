import { z } from 'zod';
import { ExamSheetSectionSelectObjectSchema } from './objects/ExamSheetSectionSelect.schema';
import { ExamSheetSectionIncludeObjectSchema } from './objects/ExamSheetSectionInclude.schema';
import { ExamSheetSectionCreateInputObjectSchema } from './objects/ExamSheetSectionCreateInput.schema';
import { ExamSheetSectionUncheckedCreateInputObjectSchema } from './objects/ExamSheetSectionUncheckedCreateInput.schema';

export const ExamSheetSectionCreateOneSchema = z.object({
  select: ExamSheetSectionSelectObjectSchema.optional(),
  include: ExamSheetSectionIncludeObjectSchema.optional(),
  data: z.union([
    ExamSheetSectionCreateInputObjectSchema,
    ExamSheetSectionUncheckedCreateInputObjectSchema,
  ]),
});
