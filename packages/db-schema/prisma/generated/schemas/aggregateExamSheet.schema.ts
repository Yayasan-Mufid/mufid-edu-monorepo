import { z } from 'zod';
import { ExamSheetOrderByWithRelationInputObjectSchema } from './objects/ExamSheetOrderByWithRelationInput.schema';
import { ExamSheetWhereInputObjectSchema } from './objects/ExamSheetWhereInput.schema';
import { ExamSheetWhereUniqueInputObjectSchema } from './objects/ExamSheetWhereUniqueInput.schema';
import { ExamSheetCountAggregateInputObjectSchema } from './objects/ExamSheetCountAggregateInput.schema';
import { ExamSheetMinAggregateInputObjectSchema } from './objects/ExamSheetMinAggregateInput.schema';
import { ExamSheetMaxAggregateInputObjectSchema } from './objects/ExamSheetMaxAggregateInput.schema';
import { ExamSheetAvgAggregateInputObjectSchema } from './objects/ExamSheetAvgAggregateInput.schema';
import { ExamSheetSumAggregateInputObjectSchema } from './objects/ExamSheetSumAggregateInput.schema';

export const ExamSheetAggregateSchema = z.object({
  orderBy: z
    .union([
      ExamSheetOrderByWithRelationInputObjectSchema,
      ExamSheetOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ExamSheetWhereInputObjectSchema.optional(),
  cursor: ExamSheetWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ExamSheetCountAggregateInputObjectSchema])
    .optional(),
  _min: ExamSheetMinAggregateInputObjectSchema.optional(),
  _max: ExamSheetMaxAggregateInputObjectSchema.optional(),
  _avg: ExamSheetAvgAggregateInputObjectSchema.optional(),
  _sum: ExamSheetSumAggregateInputObjectSchema.optional(),
});
