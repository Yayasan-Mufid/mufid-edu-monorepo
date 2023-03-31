import { z } from 'zod';
import { ExamSectionWhereInputObjectSchema } from './objects/ExamSectionWhereInput.schema';
import { ExamSectionOrderByWithAggregationInputObjectSchema } from './objects/ExamSectionOrderByWithAggregationInput.schema';
import { ExamSectionScalarWhereWithAggregatesInputObjectSchema } from './objects/ExamSectionScalarWhereWithAggregatesInput.schema';
import { ExamSectionScalarFieldEnumSchema } from './enums/ExamSectionScalarFieldEnum.schema';

export const ExamSectionGroupBySchema = z.object({
  where: ExamSectionWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ExamSectionOrderByWithAggregationInputObjectSchema,
      ExamSectionOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ExamSectionScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ExamSectionScalarFieldEnumSchema),
});
