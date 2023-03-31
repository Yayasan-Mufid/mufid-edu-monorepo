import { z } from 'zod';
import { UserRoleSelectObjectSchema } from './objects/UserRoleSelect.schema';
import { UserRoleIncludeObjectSchema } from './objects/UserRoleInclude.schema';
import { UserRoleUpdateInputObjectSchema } from './objects/UserRoleUpdateInput.schema';
import { UserRoleUncheckedUpdateInputObjectSchema } from './objects/UserRoleUncheckedUpdateInput.schema';
import { UserRoleWhereUniqueInputObjectSchema } from './objects/UserRoleWhereUniqueInput.schema';

export const UserRoleUpdateOneSchema = z.object({
  select: UserRoleSelectObjectSchema.optional(),
  include: UserRoleIncludeObjectSchema.optional(),
  data: z.union([
    UserRoleUpdateInputObjectSchema,
    UserRoleUncheckedUpdateInputObjectSchema,
  ]),
  where: UserRoleWhereUniqueInputObjectSchema,
});
