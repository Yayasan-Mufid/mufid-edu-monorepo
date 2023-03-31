import { z } from 'zod';
import { ExamSheetSelectObjectSchema } from './objects/ExamSheetSelect.schema';
import { ExamSheetIncludeObjectSchema } from './objects/ExamSheetInclude.schema';
import { ExamSheetUpdateInputObjectSchema } from './objects/ExamSheetUpdateInput.schema';
import { ExamSheetUncheckedUpdateInputObjectSchema } from './objects/ExamSheetUncheckedUpdateInput.schema';
import { ExamSheetWhereUniqueInputObjectSchema } from './objects/ExamSheetWhereUniqueInput.schema';

export const ExamSheetUpdateOneSchema = z.object({
  select: ExamSheetSelectObjectSchema.optional(),
  include: ExamSheetIncludeObjectSchema.optional(),
  data: z.union([
    ExamSheetUpdateInputObjectSchema,
    ExamSheetUncheckedUpdateInputObjectSchema,
  ]),
  where: ExamSheetWhereUniqueInputObjectSchema,
});
