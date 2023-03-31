import { z } from 'zod';
import { ExamSectionQuestionCreateManyInputObjectSchema } from './objects/ExamSectionQuestionCreateManyInput.schema';

export const ExamSectionQuestionCreateManySchema = z.object({
  data: z.union([
    ExamSectionQuestionCreateManyInputObjectSchema,
    z.array(ExamSectionQuestionCreateManyInputObjectSchema),
  ]),
});
