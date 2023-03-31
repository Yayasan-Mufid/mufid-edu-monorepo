import { z } from 'zod';
import { QuestionChoiceSelectObjectSchema } from './objects/QuestionChoiceSelect.schema';
import { QuestionChoiceIncludeObjectSchema } from './objects/QuestionChoiceInclude.schema';
import { QuestionChoiceWhereUniqueInputObjectSchema } from './objects/QuestionChoiceWhereUniqueInput.schema';
import { QuestionChoiceCreateInputObjectSchema } from './objects/QuestionChoiceCreateInput.schema';
import { QuestionChoiceUncheckedCreateInputObjectSchema } from './objects/QuestionChoiceUncheckedCreateInput.schema';
import { QuestionChoiceUpdateInputObjectSchema } from './objects/QuestionChoiceUpdateInput.schema';
import { QuestionChoiceUncheckedUpdateInputObjectSchema } from './objects/QuestionChoiceUncheckedUpdateInput.schema';

export const QuestionChoiceUpsertSchema = z.object({
  select: QuestionChoiceSelectObjectSchema.optional(),
  include: QuestionChoiceIncludeObjectSchema.optional(),
  where: QuestionChoiceWhereUniqueInputObjectSchema,
  create: z.union([
    QuestionChoiceCreateInputObjectSchema,
    QuestionChoiceUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    QuestionChoiceUpdateInputObjectSchema,
    QuestionChoiceUncheckedUpdateInputObjectSchema,
  ]),
});
