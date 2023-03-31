import { z } from 'zod';
import { UserRoleUpdateManyMutationInputObjectSchema } from './objects/UserRoleUpdateManyMutationInput.schema';
import { UserRoleWhereInputObjectSchema } from './objects/UserRoleWhereInput.schema';

export const UserRoleUpdateManySchema = z.object({
  data: UserRoleUpdateManyMutationInputObjectSchema,
  where: UserRoleWhereInputObjectSchema.optional(),
});
