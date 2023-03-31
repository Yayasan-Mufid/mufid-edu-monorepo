import { z } from 'zod';
import { ExamSheetSelectObjectSchema } from './objects/ExamSheetSelect.schema';
import { ExamSheetIncludeObjectSchema } from './objects/ExamSheetInclude.schema';
import { ExamSheetWhereUniqueInputObjectSchema } from './objects/ExamSheetWhereUniqueInput.schema';
import { ExamSheetCreateInputObjectSchema } from './objects/ExamSheetCreateInput.schema';
import { ExamSheetUncheckedCreateInputObjectSchema } from './objects/ExamSheetUncheckedCreateInput.schema';
import { ExamSheetUpdateInputObjectSchema } from './objects/ExamSheetUpdateInput.schema';
import { ExamSheetUncheckedUpdateInputObjectSchema } from './objects/ExamSheetUncheckedUpdateInput.schema';

export const ExamSheetUpsertSchema = z.object({
  select: ExamSheetSelectObjectSchema.optional(),
  include: ExamSheetIncludeObjectSchema.optional(),
  where: ExamSheetWhereUniqueInputObjectSchema,
  create: z.union([
    ExamSheetCreateInputObjectSchema,
    ExamSheetUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ExamSheetUpdateInputObjectSchema,
    ExamSheetUncheckedUpdateInputObjectSchema,
  ]),
});
