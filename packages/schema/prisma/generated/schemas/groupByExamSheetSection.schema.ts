import { z } from 'zod';
import { ExamSheetSectionWhereInputObjectSchema } from './objects/ExamSheetSectionWhereInput.schema';
import { ExamSheetSectionOrderByWithAggregationInputObjectSchema } from './objects/ExamSheetSectionOrderByWithAggregationInput.schema';
import { ExamSheetSectionScalarWhereWithAggregatesInputObjectSchema } from './objects/ExamSheetSectionScalarWhereWithAggregatesInput.schema';
import { ExamSheetSectionScalarFieldEnumSchema } from './enums/ExamSheetSectionScalarFieldEnum.schema';

export const ExamSheetSectionGroupBySchema = z.object({
  where: ExamSheetSectionWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ExamSheetSectionOrderByWithAggregationInputObjectSchema,
      ExamSheetSectionOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ExamSheetSectionScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ExamSheetSectionScalarFieldEnumSchema),
});
