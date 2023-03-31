import { z } from 'zod';
import { ExamSectionQuestionSelectObjectSchema } from './objects/ExamSectionQuestionSelect.schema';
import { ExamSectionQuestionIncludeObjectSchema } from './objects/ExamSectionQuestionInclude.schema';
import { ExamSectionQuestionWhereUniqueInputObjectSchema } from './objects/ExamSectionQuestionWhereUniqueInput.schema';

export const ExamSectionQuestionDeleteOneSchema = z.object({
  select: ExamSectionQuestionSelectObjectSchema.optional(),
  include: ExamSectionQuestionIncludeObjectSchema.optional(),
  where: ExamSectionQuestionWhereUniqueInputObjectSchema,
});
