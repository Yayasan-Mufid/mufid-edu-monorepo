import { z } from 'zod';
import { ExamSheetItemSelectObjectSchema } from './objects/ExamSheetItemSelect.schema';
import { ExamSheetItemIncludeObjectSchema } from './objects/ExamSheetItemInclude.schema';
import { ExamSheetItemWhereUniqueInputObjectSchema } from './objects/ExamSheetItemWhereUniqueInput.schema';

export const ExamSheetItemFindUniqueSchema = z.object({
  select: ExamSheetItemSelectObjectSchema.optional(),
  include: ExamSheetItemIncludeObjectSchema.optional(),
  where: ExamSheetItemWhereUniqueInputObjectSchema,
});
