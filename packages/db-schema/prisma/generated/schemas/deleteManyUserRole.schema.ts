import { z } from 'zod';
import { UserRoleWhereInputObjectSchema } from './objects/UserRoleWhereInput.schema';

export const UserRoleDeleteManySchema = z.object({
  where: UserRoleWhereInputObjectSchema.optional(),
});
