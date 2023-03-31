import { z } from 'zod';
import { ModuleOrderByWithRelationInputObjectSchema } from './objects/ModuleOrderByWithRelationInput.schema';
import { ModuleWhereInputObjectSchema } from './objects/ModuleWhereInput.schema';
import { ModuleWhereUniqueInputObjectSchema } from './objects/ModuleWhereUniqueInput.schema';
import { ModuleCountAggregateInputObjectSchema } from './objects/ModuleCountAggregateInput.schema';
import { ModuleMinAggregateInputObjectSchema } from './objects/ModuleMinAggregateInput.schema';
import { ModuleMaxAggregateInputObjectSchema } from './objects/ModuleMaxAggregateInput.schema';
import { ModuleAvgAggregateInputObjectSchema } from './objects/ModuleAvgAggregateInput.schema';
import { ModuleSumAggregateInputObjectSchema } from './objects/ModuleSumAggregateInput.schema';

export const ModuleAggregateSchema = z.object({
  orderBy: z
    .union([
      ModuleOrderByWithRelationInputObjectSchema,
      ModuleOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ModuleWhereInputObjectSchema.optional(),
  cursor: ModuleWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ModuleCountAggregateInputObjectSchema])
    .optional(),
  _min: ModuleMinAggregateInputObjectSchema.optional(),
  _max: ModuleMaxAggregateInputObjectSchema.optional(),
  _avg: ModuleAvgAggregateInputObjectSchema.optional(),
  _sum: ModuleSumAggregateInputObjectSchema.optional(),
});
