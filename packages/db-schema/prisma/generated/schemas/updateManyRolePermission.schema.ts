import { z } from 'zod';
import { RolePermissionUpdateManyMutationInputObjectSchema } from './objects/RolePermissionUpdateManyMutationInput.schema';
import { RolePermissionWhereInputObjectSchema } from './objects/RolePermissionWhereInput.schema';

export const RolePermissionUpdateManySchema = z.object({
  data: RolePermissionUpdateManyMutationInputObjectSchema,
  where: RolePermissionWhereInputObjectSchema.optional(),
});
