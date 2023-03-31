import { z } from 'zod';
import { StudyGroupWhereInputObjectSchema } from './objects/StudyGroupWhereInput.schema';
import { StudyGroupOrderByWithAggregationInputObjectSchema } from './objects/StudyGroupOrderByWithAggregationInput.schema';
import { StudyGroupScalarWhereWithAggregatesInputObjectSchema } from './objects/StudyGroupScalarWhereWithAggregatesInput.schema';
import { StudyGroupScalarFieldEnumSchema } from './enums/StudyGroupScalarFieldEnum.schema';

export const StudyGroupGroupBySchema = z.object({
  where: StudyGroupWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      StudyGroupOrderByWithAggregationInputObjectSchema,
      StudyGroupOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: StudyGroupScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(StudyGroupScalarFieldEnumSchema),
});
