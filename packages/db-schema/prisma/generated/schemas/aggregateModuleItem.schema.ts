import { z } from 'zod';
import { ModuleItemOrderByWithRelationInputObjectSchema } from './objects/ModuleItemOrderByWithRelationInput.schema';
import { ModuleItemWhereInputObjectSchema } from './objects/ModuleItemWhereInput.schema';
import { ModuleItemWhereUniqueInputObjectSchema } from './objects/ModuleItemWhereUniqueInput.schema';
import { ModuleItemCountAggregateInputObjectSchema } from './objects/ModuleItemCountAggregateInput.schema';
import { ModuleItemMinAggregateInputObjectSchema } from './objects/ModuleItemMinAggregateInput.schema';
import { ModuleItemMaxAggregateInputObjectSchema } from './objects/ModuleItemMaxAggregateInput.schema';
import { ModuleItemAvgAggregateInputObjectSchema } from './objects/ModuleItemAvgAggregateInput.schema';
import { ModuleItemSumAggregateInputObjectSchema } from './objects/ModuleItemSumAggregateInput.schema';

export const ModuleItemAggregateSchema = z.object({
  orderBy: z
    .union([
      ModuleItemOrderByWithRelationInputObjectSchema,
      ModuleItemOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ModuleItemWhereInputObjectSchema.optional(),
  cursor: ModuleItemWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ModuleItemCountAggregateInputObjectSchema])
    .optional(),
  _min: ModuleItemMinAggregateInputObjectSchema.optional(),
  _max: ModuleItemMaxAggregateInputObjectSchema.optional(),
  _avg: ModuleItemAvgAggregateInputObjectSchema.optional(),
  _sum: ModuleItemSumAggregateInputObjectSchema.optional(),
});
