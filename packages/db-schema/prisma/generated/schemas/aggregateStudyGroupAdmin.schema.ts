import { z } from 'zod';
import { StudyGroupAdminOrderByWithRelationInputObjectSchema } from './objects/StudyGroupAdminOrderByWithRelationInput.schema';
import { StudyGroupAdminWhereInputObjectSchema } from './objects/StudyGroupAdminWhereInput.schema';
import { StudyGroupAdminWhereUniqueInputObjectSchema } from './objects/StudyGroupAdminWhereUniqueInput.schema';
import { StudyGroupAdminCountAggregateInputObjectSchema } from './objects/StudyGroupAdminCountAggregateInput.schema';
import { StudyGroupAdminMinAggregateInputObjectSchema } from './objects/StudyGroupAdminMinAggregateInput.schema';
import { StudyGroupAdminMaxAggregateInputObjectSchema } from './objects/StudyGroupAdminMaxAggregateInput.schema';

export const StudyGroupAdminAggregateSchema = z.object({
  orderBy: z
    .union([
      StudyGroupAdminOrderByWithRelationInputObjectSchema,
      StudyGroupAdminOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: StudyGroupAdminWhereInputObjectSchema.optional(),
  cursor: StudyGroupAdminWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), StudyGroupAdminCountAggregateInputObjectSchema])
    .optional(),
  _min: StudyGroupAdminMinAggregateInputObjectSchema.optional(),
  _max: StudyGroupAdminMaxAggregateInputObjectSchema.optional(),
});
