import { z } from 'zod';
import { ExamSheetItemOrderByWithRelationInputObjectSchema } from './objects/ExamSheetItemOrderByWithRelationInput.schema';
import { ExamSheetItemWhereInputObjectSchema } from './objects/ExamSheetItemWhereInput.schema';
import { ExamSheetItemWhereUniqueInputObjectSchema } from './objects/ExamSheetItemWhereUniqueInput.schema';
import { ExamSheetItemCountAggregateInputObjectSchema } from './objects/ExamSheetItemCountAggregateInput.schema';
import { ExamSheetItemMinAggregateInputObjectSchema } from './objects/ExamSheetItemMinAggregateInput.schema';
import { ExamSheetItemMaxAggregateInputObjectSchema } from './objects/ExamSheetItemMaxAggregateInput.schema';
import { ExamSheetItemAvgAggregateInputObjectSchema } from './objects/ExamSheetItemAvgAggregateInput.schema';
import { ExamSheetItemSumAggregateInputObjectSchema } from './objects/ExamSheetItemSumAggregateInput.schema';

export const ExamSheetItemAggregateSchema = z.object({
  orderBy: z
    .union([
      ExamSheetItemOrderByWithRelationInputObjectSchema,
      ExamSheetItemOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ExamSheetItemWhereInputObjectSchema.optional(),
  cursor: ExamSheetItemWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ExamSheetItemCountAggregateInputObjectSchema])
    .optional(),
  _min: ExamSheetItemMinAggregateInputObjectSchema.optional(),
  _max: ExamSheetItemMaxAggregateInputObjectSchema.optional(),
  _avg: ExamSheetItemAvgAggregateInputObjectSchema.optional(),
  _sum: ExamSheetItemSumAggregateInputObjectSchema.optional(),
});
