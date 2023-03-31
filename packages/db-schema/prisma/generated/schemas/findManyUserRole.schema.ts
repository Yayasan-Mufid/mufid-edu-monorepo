import { z } from 'zod';
import { UserRoleSelectObjectSchema } from './objects/UserRoleSelect.schema';
import { UserRoleIncludeObjectSchema } from './objects/UserRoleInclude.schema';
import { UserRoleOrderByWithRelationInputObjectSchema } from './objects/UserRoleOrderByWithRelationInput.schema';
import { UserRoleWhereInputObjectSchema } from './objects/UserRoleWhereInput.schema';
import { UserRoleWhereUniqueInputObjectSchema } from './objects/UserRoleWhereUniqueInput.schema';
import { UserRoleScalarFieldEnumSchema } from './enums/UserRoleScalarFieldEnum.schema';

export const UserRoleFindManySchema = z.object({
  select: z.lazy(() => UserRoleSelectObjectSchema.optional()),
  include: z.lazy(() => UserRoleIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      UserRoleOrderByWithRelationInputObjectSchema,
      UserRoleOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: UserRoleWhereInputObjectSchema.optional(),
  cursor: UserRoleWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(UserRoleScalarFieldEnumSchema).optional(),
});
