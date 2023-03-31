import { z } from 'zod';
import { QuestionChoiceCreateManyInputObjectSchema } from './objects/QuestionChoiceCreateManyInput.schema';

export const QuestionChoiceCreateManySchema = z.object({
  data: z.union([
    QuestionChoiceCreateManyInputObjectSchema,
    z.array(QuestionChoiceCreateManyInputObjectSchema),
  ]),
});
