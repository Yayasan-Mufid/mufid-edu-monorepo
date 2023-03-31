import { z } from 'zod';
import { RolePermissionWhereInputObjectSchema } from './objects/RolePermissionWhereInput.schema';

export const RolePermissionDeleteManySchema = z.object({
  where: RolePermissionWhereInputObjectSchema.optional(),
});
