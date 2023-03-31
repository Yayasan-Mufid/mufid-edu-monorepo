import { z } from 'zod';
import { RolePermissionSelectObjectSchema } from './objects/RolePermissionSelect.schema';
import { RolePermissionIncludeObjectSchema } from './objects/RolePermissionInclude.schema';
import { RolePermissionOrderByWithRelationInputObjectSchema } from './objects/RolePermissionOrderByWithRelationInput.schema';
import { RolePermissionWhereInputObjectSchema } from './objects/RolePermissionWhereInput.schema';
import { RolePermissionWhereUniqueInputObjectSchema } from './objects/RolePermissionWhereUniqueInput.schema';
import { RolePermissionScalarFieldEnumSchema } from './enums/RolePermissionScalarFieldEnum.schema';

export const RolePermissionFindManySchema = z.object({
  select: z.lazy(() => RolePermissionSelectObjectSchema.optional()),
  include: z.lazy(() => RolePermissionIncludeObjectSchema.optional()),
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
  distinct: z.array(RolePermissionScalarFieldEnumSchema).optional(),
});
