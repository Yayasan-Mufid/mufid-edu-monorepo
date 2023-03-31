import { z } from 'zod';
import { UserRoleSelectObjectSchema } from './objects/UserRoleSelect.schema';
import { UserRoleIncludeObjectSchema } from './objects/UserRoleInclude.schema';
import { UserRoleWhereUniqueInputObjectSchema } from './objects/UserRoleWhereUniqueInput.schema';
import { UserRoleCreateInputObjectSchema } from './objects/UserRoleCreateInput.schema';
import { UserRoleUncheckedCreateInputObjectSchema } from './objects/UserRoleUncheckedCreateInput.schema';
import { UserRoleUpdateInputObjectSchema } from './objects/UserRoleUpdateInput.schema';
import { UserRoleUncheckedUpdateInputObjectSchema } from './objects/UserRoleUncheckedUpdateInput.schema';

export const UserRoleUpsertSchema = z.object({
  select: UserRoleSelectObjectSchema.optional(),
  include: UserRoleIncludeObjectSchema.optional(),
  where: UserRoleWhereUniqueInputObjectSchema,
  create: z.union([
    UserRoleCreateInputObjectSchema,
    UserRoleUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    UserRoleUpdateInputObjectSchema,
    UserRoleUncheckedUpdateInputObjectSchema,
  ]),
});
