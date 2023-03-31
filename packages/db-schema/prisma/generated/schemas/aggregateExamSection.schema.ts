import { z } from 'zod';
import { ExamSectionOrderByWithRelationInputObjectSchema } from './objects/ExamSectionOrderByWithRelationInput.schema';
import { ExamSectionWhereInputObjectSchema } from './objects/ExamSectionWhereInput.schema';
import { ExamSectionWhereUniqueInputObjectSchema } from './objects/ExamSectionWhereUniqueInput.schema';
import { ExamSectionCountAggregateInputObjectSchema } from './objects/ExamSectionCountAggregateInput.schema';
import { ExamSectionMinAggregateInputObjectSchema } from './objects/ExamSectionMinAggregateInput.schema';
import { ExamSectionMaxAggregateInputObjectSchema } from './objects/ExamSectionMaxAggregateInput.schema';
import { ExamSectionAvgAggregateInputObjectSchema } from './objects/ExamSectionAvgAggregateInput.schema';
import { ExamSectionSumAggregateInputObjectSchema } from './objects/ExamSectionSumAggregateInput.schema';

export const ExamSectionAggregateSchema = z.object({
  orderBy: z
    .union([
      ExamSectionOrderByWithRelationInputObjectSchema,
      ExamSectionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ExamSectionWhereInputObjectSchema.optional(),
  cursor: ExamSectionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ExamSectionCountAggregateInputObjectSchema])
    .optional(),
  _min: ExamSectionMinAggregateInputObjectSchema.optional(),
  _max: ExamSectionMaxAggregateInputObjectSchema.optional(),
  _avg: ExamSectionAvgAggregateInputObjectSchema.optional(),
  _sum: ExamSectionSumAggregateInputObjectSchema.optional(),
});
