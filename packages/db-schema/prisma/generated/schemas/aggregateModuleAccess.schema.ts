import { z } from 'zod';
import { ModuleAccessOrderByWithRelationInputObjectSchema } from './objects/ModuleAccessOrderByWithRelationInput.schema';
import { ModuleAccessWhereInputObjectSchema } from './objects/ModuleAccessWhereInput.schema';
import { ModuleAccessWhereUniqueInputObjectSchema } from './objects/ModuleAccessWhereUniqueInput.schema';
import { ModuleAccessCountAggregateInputObjectSchema } from './objects/ModuleAccessCountAggregateInput.schema';
import { ModuleAccessMinAggregateInputObjectSchema } from './objects/ModuleAccessMinAggregateInput.schema';
import { ModuleAccessMaxAggregateInputObjectSchema } from './objects/ModuleAccessMaxAggregateInput.schema';

export const ModuleAccessAggregateSchema = z.object({
  orderBy: z
    .union([
      ModuleAccessOrderByWithRelationInputObjectSchema,
      ModuleAccessOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ModuleAccessWhereInputObjectSchema.optional(),
  cursor: ModuleAccessWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ModuleAccessCountAggregateInputObjectSchema])
    .optional(),
  _min: ModuleAccessMinAggregateInputObjectSchema.optional(),
  _max: ModuleAccessMaxAggregateInputObjectSchema.optional(),
});
