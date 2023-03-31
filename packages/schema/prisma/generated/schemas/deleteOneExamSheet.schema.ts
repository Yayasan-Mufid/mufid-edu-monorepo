import { z } from 'zod';
import { ExamSheetSelectObjectSchema } from './objects/ExamSheetSelect.schema';
import { ExamSheetIncludeObjectSchema } from './objects/ExamSheetInclude.schema';
import { ExamSheetWhereUniqueInputObjectSchema } from './objects/ExamSheetWhereUniqueInput.schema';

export const ExamSheetDeleteOneSchema = z.object({
  select: ExamSheetSelectObjectSchema.optional(),
  include: ExamSheetIncludeObjectSchema.optional(),
  where: ExamSheetWhereUniqueInputObjectSchema,
});
