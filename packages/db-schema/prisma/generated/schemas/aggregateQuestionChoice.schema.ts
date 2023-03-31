import { z } from 'zod';
import { QuestionChoiceOrderByWithRelationInputObjectSchema } from './objects/QuestionChoiceOrderByWithRelationInput.schema';
import { QuestionChoiceWhereInputObjectSchema } from './objects/QuestionChoiceWhereInput.schema';
import { QuestionChoiceWhereUniqueInputObjectSchema } from './objects/QuestionChoiceWhereUniqueInput.schema';
import { QuestionChoiceCountAggregateInputObjectSchema } from './objects/QuestionChoiceCountAggregateInput.schema';
import { QuestionChoiceMinAggregateInputObjectSchema } from './objects/QuestionChoiceMinAggregateInput.schema';
import { QuestionChoiceMaxAggregateInputObjectSchema } from './objects/QuestionChoiceMaxAggregateInput.schema';
import { QuestionChoiceAvgAggregateInputObjectSchema } from './objects/QuestionChoiceAvgAggregateInput.schema';
import { QuestionChoiceSumAggregateInputObjectSchema } from './objects/QuestionChoiceSumAggregateInput.schema';

export const QuestionChoiceAggregateSchema = z.object({
  orderBy: z
    .union([
      QuestionChoiceOrderByWithRelationInputObjectSchema,
      QuestionChoiceOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: QuestionChoiceWhereInputObjectSchema.optional(),
  cursor: QuestionChoiceWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), QuestionChoiceCountAggregateInputObjectSchema])
    .optional(),
  _min: QuestionChoiceMinAggregateInputObjectSchema.optional(),
  _max: QuestionChoiceMaxAggregateInputObjectSchema.optional(),
  _avg: QuestionChoiceAvgAggregateInputObjectSchema.optional(),
  _sum: QuestionChoiceSumAggregateInputObjectSchema.optional(),
});
