import { z } from 'zod';
import { QuestionChoiceSelectObjectSchema } from './objects/QuestionChoiceSelect.schema';
import { QuestionChoiceIncludeObjectSchema } from './objects/QuestionChoiceInclude.schema';
import { QuestionChoiceUpdateInputObjectSchema } from './objects/QuestionChoiceUpdateInput.schema';
import { QuestionChoiceUncheckedUpdateInputObjectSchema } from './objects/QuestionChoiceUncheckedUpdateInput.schema';
import { QuestionChoiceWhereUniqueInputObjectSchema } from './objects/QuestionChoiceWhereUniqueInput.schema';

export const QuestionChoiceUpdateOneSchema = z.object({
  select: QuestionChoiceSelectObjectSchema.optional(),
  include: QuestionChoiceIncludeObjectSchema.optional(),
  data: z.union([
    QuestionChoiceUpdateInputObjectSchema,
    QuestionChoiceUncheckedUpdateInputObjectSchema,
  ]),
  where: QuestionChoiceWhereUniqueInputObjectSchema,
});
