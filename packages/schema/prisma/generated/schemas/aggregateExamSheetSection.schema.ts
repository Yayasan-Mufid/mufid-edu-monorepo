import { z } from 'zod';
import { ExamSheetSectionOrderByWithRelationInputObjectSchema } from './objects/ExamSheetSectionOrderByWithRelationInput.schema';
import { ExamSheetSectionWhereInputObjectSchema } from './objects/ExamSheetSectionWhereInput.schema';
import { ExamSheetSectionWhereUniqueInputObjectSchema } from './objects/ExamSheetSectionWhereUniqueInput.schema';
import { ExamSheetSectionCountAggregateInputObjectSchema } from './objects/ExamSheetSectionCountAggregateInput.schema';
import { ExamSheetSectionMinAggregateInputObjectSchema } from './objects/ExamSheetSectionMinAggregateInput.schema';
import { ExamSheetSectionMaxAggregateInputObjectSchema } from './objects/ExamSheetSectionMaxAggregateInput.schema';

export const ExamSheetSectionAggregateSchema = z.object({
  orderBy: z
    .union([
      ExamSheetSectionOrderByWithRelationInputObjectSchema,
      ExamSheetSectionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ExamSheetSectionWhereInputObjectSchema.optional(),
  cursor: ExamSheetSectionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ExamSheetSectionCountAggregateInputObjectSchema])
    .optional(),
  _min: ExamSheetSectionMinAggregateInputObjectSchema.optional(),
  _max: ExamSheetSectionMaxAggregateInputObjectSchema.optional(),
});
