import { z } from 'zod';
import { UserRoleCreateManyInputObjectSchema } from './objects/UserRoleCreateManyInput.schema';

export const UserRoleCreateManySchema = z.object({
  data: z.union([
    UserRoleCreateManyInputObjectSchema,
    z.array(UserRoleCreateManyInputObjectSchema),
  ]),
});
