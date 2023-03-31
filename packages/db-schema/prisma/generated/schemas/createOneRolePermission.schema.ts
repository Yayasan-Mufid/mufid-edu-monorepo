import { z } from 'zod';
import { RolePermissionSelectObjectSchema } from './objects/RolePermissionSelect.schema';
import { RolePermissionIncludeObjectSchema } from './objects/RolePermissionInclude.schema';
import { RolePermissionCreateInputObjectSchema } from './objects/RolePermissionCreateInput.schema';
import { RolePermissionUncheckedCreateInputObjectSchema } from './objects/RolePermissionUncheckedCreateInput.schema';

export const RolePermissionCreateOneSchema = z.object({
  select: RolePermissionSelectObjectSchema.optional(),
  include: RolePermissionIncludeObjectSchema.optional(),
  data: z.union([
    RolePermissionCreateInputObjectSchema,
    RolePermissionUncheckedCreateInputObjectSchema,
  ]),
});
