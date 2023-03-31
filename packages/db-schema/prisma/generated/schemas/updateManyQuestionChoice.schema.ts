import { z } from 'zod';
import { QuestionChoiceUpdateManyMutationInputObjectSchema } from './objects/QuestionChoiceUpdateManyMutationInput.schema';
import { QuestionChoiceWhereInputObjectSchema } from './objects/QuestionChoiceWhereInput.schema';

export const QuestionChoiceUpdateManySchema = z.object({
  data: QuestionChoiceUpdateManyMutationInputObjectSchema,
  where: QuestionChoiceWhereInputObjectSchema.optional(),
});
