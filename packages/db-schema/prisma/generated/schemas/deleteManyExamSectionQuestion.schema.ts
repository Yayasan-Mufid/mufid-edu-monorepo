import { z } from 'zod';
import { ExamSectionQuestionWhereInputObjectSchema } from './objects/ExamSectionQuestionWhereInput.schema';

export const ExamSectionQuestionDeleteManySchema = z.object({
  where: ExamSectionQuestionWhereInputObjectSchema.optional(),
});
