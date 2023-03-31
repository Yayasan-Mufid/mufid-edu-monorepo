import { z } from 'zod';
import { RolePermissionWhereInputObjectSchema } from './objects/RolePermissionWhereInput.schema';
import { RolePermissionOrderByWithAggregationInputObjectSchema } from './objects/RolePermissionOrderByWithAggregationInput.schema';
import { RolePermissionScalarWhereWithAggregatesInputObjectSchema } from './objects/RolePermissionScalarWhereWithAggregatesInput.schema';
import { RolePermissionScalarFieldEnumSchema } from './enums/RolePermissionScalarFieldEnum.schema';

export const RolePermissionGroupBySchema = z.object({
  where: RolePermissionWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      RolePermissionOrderByWithAggregationInputObjectSchema,
      RolePermissionOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: RolePermissionScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(RolePermissionScalarFieldEnumSchema),
});
