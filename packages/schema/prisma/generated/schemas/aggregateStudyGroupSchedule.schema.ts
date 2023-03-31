import { z } from 'zod';
import { StudyGroupScheduleOrderByWithRelationInputObjectSchema } from './objects/StudyGroupScheduleOrderByWithRelationInput.schema';
import { StudyGroupScheduleWhereInputObjectSchema } from './objects/StudyGroupScheduleWhereInput.schema';
import { StudyGroupScheduleWhereUniqueInputObjectSchema } from './objects/StudyGroupScheduleWhereUniqueInput.schema';
import { StudyGroupScheduleCountAggregateInputObjectSchema } from './objects/StudyGroupScheduleCountAggregateInput.schema';
import { StudyGroupScheduleMinAggregateInputObjectSchema } from './objects/StudyGroupScheduleMinAggregateInput.schema';
import { StudyGroupScheduleMaxAggregateInputObjectSchema } from './objects/StudyGroupScheduleMaxAggregateInput.schema';

export const StudyGroupScheduleAggregateSchema = z.object({
  orderBy: z
    .union([
      StudyGroupScheduleOrderByWithRelationInputObjectSchema,
      StudyGroupScheduleOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: StudyGroupScheduleWhereInputObjectSchema.optional(),
  cursor: StudyGroupScheduleWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), StudyGroupScheduleCountAggregateInputObjectSchema])
    .optional(),
  _min: StudyGroupScheduleMinAggregateInputObjectSchema.optional(),
  _max: StudyGroupScheduleMaxAggregateInputObjectSchema.optional(),
});
