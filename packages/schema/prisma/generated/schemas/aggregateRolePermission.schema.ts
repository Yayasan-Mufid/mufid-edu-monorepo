import { z } from 'zod';
import { RolePermissionOrderByWithRelationInputObjectSchema } from './objects/RolePermissionOrderByWithRelationInput.schema';
import { RolePermissionWhereInputObjectSchema } from './objects/RolePermissionWhereInput.schema';
import { RolePermissionWhereUniqueInputObjectSchema } from './objects/RolePermissionWhereUniqueInput.schema';
import { RolePermissionCountAggregateInputObjectSchema } from './objects/RolePermissionCountAggregateInput.schema';
import { RolePermissionMinAggregateInputObjectSchema } from './objects/RolePermissionMinAggregateInput.schema';
import { RolePermissionMaxAggregateInputObjectSchema } from './objects/RolePermissionMaxAggregateInput.schema';

export const RolePermissionAggregateSchema = z.object({
  orderBy: z
    .union([
      RolePermissionOrderByWithRelationInputObjectSchema,
      RolePermissionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: RolePermissionWhereInputObjectSchema.optional(),
  cursor: RolePermissionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), RolePermissionCountAggregateInputObjectSchema])
    .optional(),
  _min: RolePermissionMinAggregateInputObjectSchema.optional(),
  _max: RolePermissionMaxAggregateInputObjectSchema.optional(),
});
