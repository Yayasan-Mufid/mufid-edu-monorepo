import { z } from 'zod';
import { ExamSheetSectionSelectObjectSchema } from './objects/ExamSheetSectionSelect.schema';
import { ExamSheetSectionIncludeObjectSchema } from './objects/ExamSheetSectionInclude.schema';
import { ExamSheetSectionUpdateInputObjectSchema } from './objects/ExamSheetSectionUpdateInput.schema';
import { ExamSheetSectionUncheckedUpdateInputObjectSchema } from './objects/ExamSheetSectionUncheckedUpdateInput.schema';
import { ExamSheetSectionWhereUniqueInputObjectSchema } from './objects/ExamSheetSectionWhereUniqueInput.schema';

export const ExamSheetSectionUpdateOneSchema = z.object({
  select: ExamSheetSectionSelectObjectSchema.optional(),
  include: ExamSheetSectionIncludeObjectSchema.optional(),
  data: z.union([
    ExamSheetSectionUpdateInputObjectSchema,
    ExamSheetSectionUncheckedUpdateInputObjectSchema,
  ]),
  where: ExamSheetSectionWhereUniqueInputObjectSchema,
});
