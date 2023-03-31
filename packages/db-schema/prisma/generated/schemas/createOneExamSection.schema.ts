import { z } from 'zod';
import { ExamSectionSelectObjectSchema } from './objects/ExamSectionSelect.schema';
import { ExamSectionIncludeObjectSchema } from './objects/ExamSectionInclude.schema';
import { ExamSectionCreateInputObjectSchema } from './objects/ExamSectionCreateInput.schema';
import { ExamSectionUncheckedCreateInputObjectSchema } from './objects/ExamSectionUncheckedCreateInput.schema';

export const ExamSectionCreateOneSchema = z.object({
  select: ExamSectionSelectObjectSchema.optional(),
  include: ExamSectionIncludeObjectSchema.optional(),
  data: z.union([
    ExamSectionCreateInputObjectSchema,
    ExamSectionUncheckedCreateInputObjectSchema,
  ]),
});
