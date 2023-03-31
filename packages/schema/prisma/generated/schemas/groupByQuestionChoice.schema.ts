import { z } from 'zod';
import { QuestionChoiceWhereInputObjectSchema } from './objects/QuestionChoiceWhereInput.schema';
import { QuestionChoiceOrderByWithAggregationInputObjectSchema } from './objects/QuestionChoiceOrderByWithAggregationInput.schema';
import { QuestionChoiceScalarWhereWithAggregatesInputObjectSchema } from './objects/QuestionChoiceScalarWhereWithAggregatesInput.schema';
import { QuestionChoiceScalarFieldEnumSchema } from './enums/QuestionChoiceScalarFieldEnum.schema';

export const QuestionChoiceGroupBySchema = z.object({
  where: QuestionChoiceWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      QuestionChoiceOrderByWithAggregationInputObjectSchema,
      QuestionChoiceOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: QuestionChoiceScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(QuestionChoiceScalarFieldEnumSchema),
});
