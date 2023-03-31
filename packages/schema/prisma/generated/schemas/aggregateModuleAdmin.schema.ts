import { z } from 'zod';
import { ModuleAdminOrderByWithRelationInputObjectSchema } from './objects/ModuleAdminOrderByWithRelationInput.schema';
import { ModuleAdminWhereInputObjectSchema } from './objects/ModuleAdminWhereInput.schema';
import { ModuleAdminWhereUniqueInputObjectSchema } from './objects/ModuleAdminWhereUniqueInput.schema';
import { ModuleAdminCountAggregateInputObjectSchema } from './objects/ModuleAdminCountAggregateInput.schema';
import { ModuleAdminMinAggregateInputObjectSchema } from './objects/ModuleAdminMinAggregateInput.schema';
import { ModuleAdminMaxAggregateInputObjectSchema } from './objects/ModuleAdminMaxAggregateInput.schema';

export const ModuleAdminAggregateSchema = z.object({
  orderBy: z
    .union([
      ModuleAdminOrderByWithRelationInputObjectSchema,
      ModuleAdminOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ModuleAdminWhereInputObjectSchema.optional(),
  cursor: ModuleAdminWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ModuleAdminCountAggregateInputObjectSchema])
    .optional(),
  _min: ModuleAdminMinAggregateInputObjectSchema.optional(),
  _max: ModuleAdminMaxAggregateInputObjectSchema.optional(),
});
