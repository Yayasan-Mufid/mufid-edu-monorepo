import { z } from 'zod';
import { ExamSheetItemSelectObjectSchema } from './objects/ExamSheetItemSelect.schema';
import { ExamSheetItemIncludeObjectSchema } from './objects/ExamSheetItemInclude.schema';
import { ExamSheetItemWhereUniqueInputObjectSchema } from './objects/ExamSheetItemWhereUniqueInput.schema';
import { ExamSheetItemCreateInputObjectSchema } from './objects/ExamSheetItemCreateInput.schema';
import { ExamSheetItemUncheckedCreateInputObjectSchema } from './objects/ExamSheetItemUncheckedCreateInput.schema';
import { ExamSheetItemUpdateInputObjectSchema } from './objects/ExamSheetItemUpdateInput.schema';
import { ExamSheetItemUncheckedUpdateInputObjectSchema } from './objects/ExamSheetItemUncheckedUpdateInput.schema';

export const ExamSheetItemUpsertSchema = z.object({
  select: ExamSheetItemSelectObjectSchema.optional(),
  include: ExamSheetItemIncludeObjectSchema.optional(),
  where: ExamSheetItemWhereUniqueInputObjectSchema,
  create: z.union([
    ExamSheetItemCreateInputObjectSchema,
    ExamSheetItemUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ExamSheetItemUpdateInputObjectSchema,
    ExamSheetItemUncheckedUpdateInputObjectSchema,
  ]),
});
