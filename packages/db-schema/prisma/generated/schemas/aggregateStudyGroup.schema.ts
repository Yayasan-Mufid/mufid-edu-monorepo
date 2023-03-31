import { z } from 'zod';
import { StudyGroupOrderByWithRelationInputObjectSchema } from './objects/StudyGroupOrderByWithRelationInput.schema';
import { StudyGroupWhereInputObjectSchema } from './objects/StudyGroupWhereInput.schema';
import { StudyGroupWhereUniqueInputObjectSchema } from './objects/StudyGroupWhereUniqueInput.schema';
import { StudyGroupCountAggregateInputObjectSchema } from './objects/StudyGroupCountAggregateInput.schema';
import { StudyGroupMinAggregateInputObjectSchema } from './objects/StudyGroupMinAggregateInput.schema';
import { StudyGroupMaxAggregateInputObjectSchema } from './objects/StudyGroupMaxAggregateInput.schema';
import { StudyGroupAvgAggregateInputObjectSchema } from './objects/StudyGroupAvgAggregateInput.schema';
import { StudyGroupSumAggregateInputObjectSchema } from './objects/StudyGroupSumAggregateInput.schema';

export const StudyGroupAggregateSchema = z.object({
  orderBy: z
    .union([
      StudyGroupOrderByWithRelationInputObjectSchema,
      StudyGroupOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: StudyGroupWhereInputObjectSchema.optional(),
  cursor: StudyGroupWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), StudyGroupCountAggregateInputObjectSchema])
    .optional(),
  _min: StudyGroupMinAggregateInputObjectSchema.optional(),
  _max: StudyGroupMaxAggregateInputObjectSchema.optional(),
  _avg: StudyGroupAvgAggregateInputObjectSchema.optional(),
  _sum: StudyGroupSumAggregateInputObjectSchema.optional(),
});
