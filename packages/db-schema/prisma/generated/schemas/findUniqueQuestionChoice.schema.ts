import { z } from 'zod';
import { QuestionChoiceSelectObjectSchema } from './objects/QuestionChoiceSelect.schema';
import { QuestionChoiceIncludeObjectSchema } from './objects/QuestionChoiceInclude.schema';
import { QuestionChoiceWhereUniqueInputObjectSchema } from './objects/QuestionChoiceWhereUniqueInput.schema';

export const QuestionChoiceFindUniqueSchema = z.object({
  select: QuestionChoiceSelectObjectSchema.optional(),
  include: QuestionChoiceIncludeObjectSchema.optional(),
  where: QuestionChoiceWhereUniqueInputObjectSchema,
});
