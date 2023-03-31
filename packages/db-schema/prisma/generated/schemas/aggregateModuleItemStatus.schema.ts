import { z } from 'zod';
import { ModuleItemStatusOrderByWithRelationInputObjectSchema } from './objects/ModuleItemStatusOrderByWithRelationInput.schema';
import { ModuleItemStatusWhereInputObjectSchema } from './objects/ModuleItemStatusWhereInput.schema';
import { ModuleItemStatusWhereUniqueInputObjectSchema } from './objects/ModuleItemStatusWhereUniqueInput.schema';
import { ModuleItemStatusCountAggregateInputObjectSchema } from './objects/ModuleItemStatusCountAggregateInput.schema';
import { ModuleItemStatusMinAggregateInputObjectSchema } from './objects/ModuleItemStatusMinAggregateInput.schema';
import { ModuleItemStatusMaxAggregateInputObjectSchema } from './objects/ModuleItemStatusMaxAggregateInput.schema';

export const ModuleItemStatusAggregateSchema = z.object({
  orderBy: z
    .union([
      ModuleItemStatusOrderByWithRelationInputObjectSchema,
      ModuleItemStatusOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ModuleItemStatusWhereInputObjectSchema.optional(),
  cursor: ModuleItemStatusWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ModuleItemStatusCountAggregateInputObjectSchema])
    .optional(),
  _min: ModuleItemStatusMinAggregateInputObjectSchema.optional(),
  _max: ModuleItemStatusMaxAggregateInputObjectSchema.optional(),
});
