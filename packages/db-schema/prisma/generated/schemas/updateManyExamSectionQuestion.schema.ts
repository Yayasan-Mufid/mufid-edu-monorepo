import { z } from 'zod';
import { ExamSectionQuestionUpdateManyMutationInputObjectSchema } from './objects/ExamSectionQuestionUpdateManyMutationInput.schema';
import { ExamSectionQuestionWhereInputObjectSchema } from './objects/ExamSectionQuestionWhereInput.schema';

export const ExamSectionQuestionUpdateManySchema = z.object({
  data: ExamSectionQuestionUpdateManyMutationInputObjectSchema,
  where: ExamSectionQuestionWhereInputObjectSchema.optional(),
});
