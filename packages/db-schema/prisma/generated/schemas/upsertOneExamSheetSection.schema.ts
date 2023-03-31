import { z } from 'zod';
import { ExamSheetSectionSelectObjectSchema } from './objects/ExamSheetSectionSelect.schema';
import { ExamSheetSectionIncludeObjectSchema } from './objects/ExamSheetSectionInclude.schema';
import { ExamSheetSectionWhereUniqueInputObjectSchema } from './objects/ExamSheetSectionWhereUniqueInput.schema';
import { ExamSheetSectionCreateInputObjectSchema } from './objects/ExamSheetSectionCreateInput.schema';
import { ExamSheetSectionUncheckedCreateInputObjectSchema } from './objects/ExamSheetSectionUncheckedCreateInput.schema';
import { ExamSheetSectionUpdateInputObjectSchema } from './objects/ExamSheetSectionUpdateInput.schema';
import { ExamSheetSectionUncheckedUpdateInputObjectSchema } from './objects/ExamSheetSectionUncheckedUpdateInput.schema';

export const ExamSheetSectionUpsertSchema = z.object({
  select: ExamSheetSectionSelectObjectSchema.optional(),
  include: ExamSheetSectionIncludeObjectSchema.optional(),
  where: ExamSheetSectionWhereUniqueInputObjectSchema,
  create: z.union([
    ExamSheetSectionCreateInputObjectSchema,
    ExamSheetSectionUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ExamSheetSectionUpdateInputObjectSchema,
    ExamSheetSectionUncheckedUpdateInputObjectSchema,
  ]),
});
