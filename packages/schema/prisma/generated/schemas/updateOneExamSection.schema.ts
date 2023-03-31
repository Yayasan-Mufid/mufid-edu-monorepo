import { z } from 'zod';
import { ExamSectionSelectObjectSchema } from './objects/ExamSectionSelect.schema';
import { ExamSectionIncludeObjectSchema } from './objects/ExamSectionInclude.schema';
import { ExamSectionUpdateInputObjectSchema } from './objects/ExamSectionUpdateInput.schema';
import { ExamSectionUncheckedUpdateInputObjectSchema } from './objects/ExamSectionUncheckedUpdateInput.schema';
import { ExamSectionWhereUniqueInputObjectSchema } from './objects/ExamSectionWhereUniqueInput.schema';

export const ExamSectionUpdateOneSchema = z.object({
  select: ExamSectionSelectObjectSchema.optional(),
  include: ExamSectionIncludeObjectSchema.optional(),
  data: z.union([
    ExamSectionUpdateInputObjectSchema,
    ExamSectionUncheckedUpdateInputObjectSchema,
  ]),
  where: ExamSectionWhereUniqueInputObjectSchema,
});
