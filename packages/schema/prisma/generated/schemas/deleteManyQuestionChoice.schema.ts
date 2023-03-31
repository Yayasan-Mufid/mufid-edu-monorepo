import { z } from 'zod';
import { QuestionChoiceWhereInputObjectSchema } from './objects/QuestionChoiceWhereInput.schema';

export const QuestionChoiceDeleteManySchema = z.object({
  where: QuestionChoiceWhereInputObjectSchema.optional(),
});
