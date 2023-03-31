import { z } from 'zod';
import { QuestionChoiceSelectObjectSchema } from './objects/QuestionChoiceSelect.schema';
import { QuestionChoiceIncludeObjectSchema } from './objects/QuestionChoiceInclude.schema';
import { QuestionChoiceCreateInputObjectSchema } from './objects/QuestionChoiceCreateInput.schema';
import { QuestionChoiceUncheckedCreateInputObjectSchema } from './objects/QuestionChoiceUncheckedCreateInput.schema';

export const QuestionChoiceCreateOneSchema = z.object({
  select: QuestionChoiceSelectObjectSchema.optional(),
  include: QuestionChoiceIncludeObjectSchema.optional(),
  data: z.union([
    QuestionChoiceCreateInputObjectSchema,
    QuestionChoiceUncheckedCreateInputObjectSchema,
  ]),
});
