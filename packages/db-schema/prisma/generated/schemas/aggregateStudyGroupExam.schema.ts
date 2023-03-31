import { z } from 'zod';
import { StudyGroupExamOrderByWithRelationInputObjectSchema } from './objects/StudyGroupExamOrderByWithRelationInput.schema';
import { StudyGroupExamWhereInputObjectSchema } from './objects/StudyGroupExamWhereInput.schema';
import { StudyGroupExamWhereUniqueInputObjectSchema } from './objects/StudyGroupExamWhereUniqueInput.schema';
import { StudyGroupExamCountAggregateInputObjectSchema } from './objects/StudyGroupExamCountAggregateInput.schema';
import { StudyGroupExamMinAggregateInputObjectSchema } from './objects/StudyGroupExamMinAggregateInput.schema';
import { StudyGroupExamMaxAggregateInputObjectSchema } from './objects/StudyGroupExamMaxAggregateInput.schema';
import { StudyGroupExamAvgAggregateInputObjectSchema } from './objects/StudyGroupExamAvgAggregateInput.schema';
import { StudyGroupExamSumAggregateInputObjectSchema } from './objects/StudyGroupExamSumAggregateInput.schema';

export const StudyGroupExamAggregateSchema = z.object({
  orderBy: z
    .union([
      StudyGroupExamOrderByWithRelationInputObjectSchema,
      StudyGroupExamOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: StudyGroupExamWhereInputObjectSchema.optional(),
  cursor: StudyGroupExamWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), StudyGroupExamCountAggregateInputObjectSchema])
    .optional(),
  _min: StudyGroupExamMinAggregateInputObjectSchema.optional(),
  _max: StudyGroupExamMaxAggregateInputObjectSchema.optional(),
  _avg: StudyGroupExamAvgAggregateInputObjectSchema.optional(),
  _sum: StudyGroupExamSumAggregateInputObjectSchema.optional(),
});
