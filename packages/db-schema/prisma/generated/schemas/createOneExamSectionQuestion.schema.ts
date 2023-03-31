import { z } from 'zod';
import { ExamSectionQuestionSelectObjectSchema } from './objects/ExamSectionQuestionSelect.schema';
import { ExamSectionQuestionIncludeObjectSchema } from './objects/ExamSectionQuestionInclude.schema';
import { ExamSectionQuestionCreateInputObjectSchema } from './objects/ExamSectionQuestionCreateInput.schema';
import { ExamSectionQuestionUncheckedCreateInputObjectSchema } from './objects/ExamSectionQuestionUncheckedCreateInput.schema';

export const ExamSectionQuestionCreateOneSchema = z.object({
  select: ExamSectionQuestionSelectObjectSchema.optional(),
  include: ExamSectionQuestionIncludeObjectSchema.optional(),
  data: z.union([
    ExamSectionQuestionCreateInputObjectSchema,
    ExamSectionQuestionUncheckedCreateInputObjectSchema,
  ]),
});
