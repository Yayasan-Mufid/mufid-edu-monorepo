import { z } from 'zod';
import { StudyGroupScheduleWhereInputObjectSchema } from './objects/StudyGroupScheduleWhereInput.schema';
import { StudyGroupScheduleOrderByWithAggregationInputObjectSchema } from './objects/StudyGroupScheduleOrderByWithAggregationInput.schema';
import { StudyGroupScheduleScalarWhereWithAggregatesInputObjectSchema } from './objects/StudyGroupScheduleScalarWhereWithAggregatesInput.schema';
import { StudyGroupScheduleScalarFieldEnumSchema } from './enums/StudyGroupScheduleScalarFieldEnum.schema';

export const StudyGroupScheduleGroupBySchema = z.object({
  where: StudyGroupScheduleWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      StudyGroupScheduleOrderByWithAggregationInputObjectSchema,
      StudyGroupScheduleOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    StudyGroupScheduleScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(StudyGroupScheduleScalarFieldEnumSchema),
});
