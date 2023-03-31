import { z } from 'zod';
import { RolePermissionCreateManyInputObjectSchema } from './objects/RolePermissionCreateManyInput.schema';

export const RolePermissionCreateManySchema = z.object({
  data: z.union([
    RolePermissionCreateManyInputObjectSchema,
    z.array(RolePermissionCreateManyInputObjectSchema),
  ]),
});
