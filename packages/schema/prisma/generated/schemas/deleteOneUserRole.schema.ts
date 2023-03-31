import { z } from 'zod';
import { UserRoleSelectObjectSchema } from './objects/UserRoleSelect.schema';
import { UserRoleIncludeObjectSchema } from './objects/UserRoleInclude.schema';
import { UserRoleWhereUniqueInputObjectSchema } from './objects/UserRoleWhereUniqueInput.schema';

export const UserRoleDeleteOneSchema = z.object({
  select: UserRoleSelectObjectSchema.optional(),
  include: UserRoleIncludeObjectSchema.optional(),
  where: UserRoleWhereUniqueInputObjectSchema,
});
