import { z } from 'zod';
import { ExamSheetItemSelectObjectSchema } from './objects/ExamSheetItemSelect.schema';
import { ExamSheetItemIncludeObjectSchema } from './objects/ExamSheetItemInclude.schema';
import { ExamSheetItemCreateInputObjectSchema } from './objects/ExamSheetItemCreateInput.schema';
import { ExamSheetItemUncheckedCreateInputObjectSchema } from './objects/ExamSheetItemUncheckedCreateInput.schema';

export const ExamSheetItemCreateOneSchema = z.object({
  select: ExamSheetItemSelectObjectSchema.optional(),
  include: ExamSheetItemIncludeObjectSchema.optional(),
  data: z.union([
    ExamSheetItemCreateInputObjectSchema,
    ExamSheetItemUncheckedCreateInputObjectSchema,
  ]),
});
