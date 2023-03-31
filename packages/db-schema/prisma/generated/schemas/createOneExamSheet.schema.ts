import { z } from 'zod';
import { ExamSheetSelectObjectSchema } from './objects/ExamSheetSelect.schema';
import { ExamSheetIncludeObjectSchema } from './objects/ExamSheetInclude.schema';
import { ExamSheetCreateInputObjectSchema } from './objects/ExamSheetCreateInput.schema';
import { ExamSheetUncheckedCreateInputObjectSchema } from './objects/ExamSheetUncheckedCreateInput.schema';

export const ExamSheetCreateOneSchema = z.object({
  select: ExamSheetSelectObjectSchema.optional(),
  include: ExamSheetIncludeObjectSchema.optional(),
  data: z.union([
    ExamSheetCreateInputObjectSchema,
    ExamSheetUncheckedCreateInputObjectSchema,
  ]),
});
