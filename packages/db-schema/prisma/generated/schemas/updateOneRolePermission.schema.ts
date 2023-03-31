import { z } from 'zod';
import { RolePermissionSelectObjectSchema } from './objects/RolePermissionSelect.schema';
import { RolePermissionIncludeObjectSchema } from './objects/RolePermissionInclude.schema';
import { RolePermissionUpdateInputObjectSchema } from './objects/RolePermissionUpdateInput.schema';
import { RolePermissionUncheckedUpdateInputObjectSchema } from './objects/RolePermissionUncheckedUpdateInput.schema';
import { RolePermissionWhereUniqueInputObjectSchema } from './objects/RolePermissionWhereUniqueInput.schema';

export const RolePermissionUpdateOneSchema = z.object({
  select: RolePermissionSelectObjectSchema.optional(),
  include: RolePermissionIncludeObjectSchema.optional(),
  data: z.union([
    RolePermissionUpdateInputObjectSchema,
    RolePermissionUncheckedUpdateInputObjectSchema,
  ]),
  where: RolePermissionWhereUniqueInputObjectSchema,
});
