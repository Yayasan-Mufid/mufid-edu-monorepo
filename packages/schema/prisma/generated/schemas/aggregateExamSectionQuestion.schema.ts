import { z } from 'zod';
import { ExamSectionQuestionOrderByWithRelationInputObjectSchema } from './objects/ExamSectionQuestionOrderByWithRelationInput.schema';
import { ExamSectionQuestionWhereInputObjectSchema } from './objects/ExamSectionQuestionWhereInput.schema';
import { ExamSectionQuestionWhereUniqueInputObjectSchema } from './objects/ExamSectionQuestionWhereUniqueInput.schema';
import { ExamSectionQuestionCountAggregateInputObjectSchema } from './objects/ExamSectionQuestionCountAggregateInput.schema';
import { ExamSectionQuestionMinAggregateInputObjectSchema } from './objects/ExamSectionQuestionMinAggregateInput.schema';
import { ExamSectionQuestionMaxAggregateInputObjectSchema } from './objects/ExamSectionQuestionMaxAggregateInput.schema';
import { ExamSectionQuestionAvgAggregateInputObjectSchema } from './objects/ExamSectionQuestionAvgAggregateInput.schema';
import { ExamSectionQuestionSumAggregateInputObjectSchema } from './objects/ExamSectionQuestionSumAggregateInput.schema';

export const ExamSectionQuestionAggregateSchema = z.object({
  orderBy: z
    .union([
      ExamSectionQuestionOrderByWithRelationInputObjectSchema,
      ExamSectionQuestionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ExamSectionQuestionWhereInputObjectSchema.optional(),
  cursor: ExamSectionQuestionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([
      z.literal(true),
      ExamSectionQuestionCountAggregateInputObjectSchema,
    ])
    .optional(),
  _min: ExamSectionQuestionMinAggregateInputObjectSchema.optional(),
  _max: ExamSectionQuestionMaxAggregateInputObjectSchema.optional(),
  _avg: ExamSectionQuestionAvgAggregateInputObjectSchema.optional(),
  _sum: ExamSectionQuestionSumAggregateInputObjectSchema.optional(),
});
