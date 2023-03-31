import { z } from 'zod';
import { ExamSheetWhereInputObjectSchema } from './objects/ExamSheetWhereInput.schema';
import { ExamSheetOrderByWithAggregationInputObjectSchema } from './objects/ExamSheetOrderByWithAggregationInput.schema';
import { ExamSheetScalarWhereWithAggregatesInputObjectSchema } from './objects/ExamSheetScalarWhereWithAggregatesInput.schema';
import { ExamSheetScalarFieldEnumSchema } from './enums/ExamSheetScalarFieldEnum.schema';

export const ExamSheetGroupBySchema = z.object({
  where: ExamSheetWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ExamSheetOrderByWithAggregationInputObjectSchema,
      ExamSheetOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ExamSheetScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ExamSheetScalarFieldEnumSchema),
});
