import { z } from 'zod';
import { RolePermissionSelectObjectSchema } from './objects/RolePermissionSelect.schema';
import { RolePermissionIncludeObjectSchema } from './objects/RolePermissionInclude.schema';
import { RolePermissionWhereUniqueInputObjectSchema } from './objects/RolePermissionWhereUniqueInput.schema';

export const RolePermissionDeleteOneSchema = z.object({
  select: RolePermissionSelectObjectSchema.optional(),
  include: RolePermissionIncludeObjectSchema.optional(),
  where: RolePermissionWhereUniqueInputObjectSchema,
});
