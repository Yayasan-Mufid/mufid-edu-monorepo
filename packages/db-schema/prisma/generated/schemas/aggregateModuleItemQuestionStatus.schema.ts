import { z } from 'zod';
import { ModuleItemQuestionStatusOrderByWithRelationInputObjectSchema } from './objects/ModuleItemQuestionStatusOrderByWithRelationInput.schema';
import { ModuleItemQuestionStatusWhereInputObjectSchema } from './objects/ModuleItemQuestionStatusWhereInput.schema';
import { ModuleItemQuestionStatusWhereUniqueInputObjectSchema } from './objects/ModuleItemQuestionStatusWhereUniqueInput.schema';
import { ModuleItemQuestionStatusCountAggregateInputObjectSchema } from './objects/ModuleItemQuestionStatusCountAggregateInput.schema';
import { ModuleItemQuestionStatusMinAggregateInputObjectSchema } from './objects/ModuleItemQuestionStatusMinAggregateInput.schema';
import { ModuleItemQuestionStatusMaxAggregateInputObjectSchema } from './objects/ModuleItemQuestionStatusMaxAggregateInput.schema';

export const ModuleItemQuestionStatusAggregateSchema = z.object({
  orderBy: z
    .union([
      ModuleItemQuestionStatusOrderByWithRelationInputObjectSchema,
      ModuleItemQuestionStatusOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ModuleItemQuestionStatusWhereInputObjectSchema.optional(),
  cursor: ModuleItemQuestionStatusWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([
      z.literal(true),
      ModuleItemQuestionStatusCountAggregateInputObjectSchema,
    ])
    .optional(),
  _min: ModuleItemQuestionStatusMinAggregateInputObjectSchema.optional(),
  _max: ModuleItemQuestionStatusMaxAggregateInputObjectSchema.optional(),
});
