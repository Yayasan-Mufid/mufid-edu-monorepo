import { z } from 'zod';
import { UserRoleSelectObjectSchema } from './objects/UserRoleSelect.schema';
import { UserRoleIncludeObjectSchema } from './objects/UserRoleInclude.schema';
import { UserRoleCreateInputObjectSchema } from './objects/UserRoleCreateInput.schema';
import { UserRoleUncheckedCreateInputObjectSchema } from './objects/UserRoleUncheckedCreateInput.schema';

export const UserRoleCreateOneSchema = z.object({
  select: UserRoleSelectObjectSchema.optional(),
  include: UserRoleIncludeObjectSchema.optional(),
  data: z.union([
    UserRoleCreateInputObjectSchema,
    UserRoleUncheckedCreateInputObjectSchema,
  ]),
});
