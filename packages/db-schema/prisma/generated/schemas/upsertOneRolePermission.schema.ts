import { z } from 'zod';
import { RolePermissionSelectObjectSchema } from './objects/RolePermissionSelect.schema';
import { RolePermissionIncludeObjectSchema } from './objects/RolePermissionInclude.schema';
import { RolePermissionWhereUniqueInputObjectSchema } from './objects/RolePermissionWhereUniqueInput.schema';
import { RolePermissionCreateInputObjectSchema } from './objects/RolePermissionCreateInput.schema';
import { RolePermissionUncheckedCreateInputObjectSchema } from './objects/RolePermissionUncheckedCreateInput.schema';
import { RolePermissionUpdateInputObjectSchema } from './objects/RolePermissionUpdateInput.schema';
import { RolePermissionUncheckedUpdateInputObjectSchema } from './objects/RolePermissionUncheckedUpdateInput.schema';

export const RolePermissionUpsertSchema = z.object({
  select: RolePermissionSelectObjectSchema.optional(),
  include: RolePermissionIncludeObjectSchema.optional(),
  where: RolePermissionWhereUniqueInputObjectSchema,
  create: z.union([
    RolePermissionCreateInputObjectSchema,
    RolePermissionUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    RolePermissionUpdateInputObjectSchema,
    RolePermissionUncheckedUpdateInputObjectSchema,
  ]),
});
