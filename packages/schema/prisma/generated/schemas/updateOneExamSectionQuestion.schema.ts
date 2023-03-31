import { z } from 'zod';
import { ExamSectionQuestionSelectObjectSchema } from './objects/ExamSectionQuestionSelect.schema';
import { ExamSectionQuestionIncludeObjectSchema } from './objects/ExamSectionQuestionInclude.schema';
import { ExamSectionQuestionUpdateInputObjectSchema } from './objects/ExamSectionQuestionUpdateInput.schema';
import { ExamSectionQuestionUncheckedUpdateInputObjectSchema } from './objects/ExamSectionQuestionUncheckedUpdateInput.schema';
import { ExamSectionQuestionWhereUniqueInputObjectSchema } from './objects/ExamSectionQuestionWhereUniqueInput.schema';

export const ExamSectionQuestionUpdateOneSchema = z.object({
  select: ExamSectionQuestionSelectObjectSchema.optional(),
  include: ExamSectionQuestionIncludeObjectSchema.optional(),
  data: z.union([
    ExamSectionQuestionUpdateInputObjectSchema,
    ExamSectionQuestionUncheckedUpdateInputObjectSchema,
  ]),
  where: ExamSectionQuestionWhereUniqueInputObjectSchema,
});
