import { z } from 'zod';
import { ExamWhereInputObjectSchema } from './objects/ExamWhereInput.schema';
import { ExamOrderByWithAggregationInputObjectSchema } from './objects/ExamOrderByWithAggregationInput.schema';
import { ExamScalarWhereWithAggregatesInputObjectSchema } from './objects/ExamScalarWhereWithAggregatesInput.schema';
import { ExamScalarFieldEnumSchema } from './enums/ExamScalarFieldEnum.schema';

export const ExamGroupBySchema = z.object({
  where: ExamWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ExamOrderByWithAggregationInputObjectSchema,
      ExamOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ExamScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ExamScalarFieldEnumSchema),
});
