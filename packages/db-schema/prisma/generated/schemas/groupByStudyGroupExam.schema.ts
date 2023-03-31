import { z } from 'zod';
import { StudyGroupExamWhereInputObjectSchema } from './objects/StudyGroupExamWhereInput.schema';
import { StudyGroupExamOrderByWithAggregationInputObjectSchema } from './objects/StudyGroupExamOrderByWithAggregationInput.schema';
import { StudyGroupExamScalarWhereWithAggregatesInputObjectSchema } from './objects/StudyGroupExamScalarWhereWithAggregatesInput.schema';
import { StudyGroupExamScalarFieldEnumSchema } from './enums/StudyGroupExamScalarFieldEnum.schema';

export const StudyGroupExamGroupBySchema = z.object({
  where: StudyGroupExamWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      StudyGroupExamOrderByWithAggregationInputObjectSchema,
      StudyGroupExamOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: StudyGroupExamScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(StudyGroupExamScalarFieldEnumSchema),
});
