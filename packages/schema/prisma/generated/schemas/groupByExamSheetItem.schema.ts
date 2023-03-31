import { z } from 'zod';
import { ExamSheetItemWhereInputObjectSchema } from './objects/ExamSheetItemWhereInput.schema';
import { ExamSheetItemOrderByWithAggregationInputObjectSchema } from './objects/ExamSheetItemOrderByWithAggregationInput.schema';
import { ExamSheetItemScalarWhereWithAggregatesInputObjectSchema } from './objects/ExamSheetItemScalarWhereWithAggregatesInput.schema';
import { ExamSheetItemScalarFieldEnumSchema } from './enums/ExamSheetItemScalarFieldEnum.schema';

export const ExamSheetItemGroupBySchema = z.object({
  where: ExamSheetItemWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ExamSheetItemOrderByWithAggregationInputObjectSchema,
      ExamSheetItemOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ExamSheetItemScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ExamSheetItemScalarFieldEnumSchema),
});
