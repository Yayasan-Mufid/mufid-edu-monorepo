import { z } from 'zod';
import { ExamSheetItemSelectObjectSchema } from './objects/ExamSheetItemSelect.schema';
import { ExamSheetItemIncludeObjectSchema } from './objects/ExamSheetItemInclude.schema';
import { ExamSheetItemUpdateInputObjectSchema } from './objects/ExamSheetItemUpdateInput.schema';
import { ExamSheetItemUncheckedUpdateInputObjectSchema } from './objects/ExamSheetItemUncheckedUpdateInput.schema';
import { ExamSheetItemWhereUniqueInputObjectSchema } from './objects/ExamSheetItemWhereUniqueInput.schema';

export const ExamSheetItemUpdateOneSchema = z.object({
  select: ExamSheetItemSelectObjectSchema.optional(),
  include: ExamSheetItemIncludeObjectSchema.optional(),
  data: z.union([
    ExamSheetItemUpdateInputObjectSchema,
    ExamSheetItemUncheckedUpdateInputObjectSchema,
  ]),
  where: ExamSheetItemWhereUniqueInputObjectSchema,
});
