import { z } from 'zod';
import { UserRoleWhereInputObjectSchema } from './objects/UserRoleWhereInput.schema';
import { UserRoleOrderByWithAggregationInputObjectSchema } from './objects/UserRoleOrderByWithAggregationInput.schema';
import { UserRoleScalarWhereWithAggregatesInputObjectSchema } from './objects/UserRoleScalarWhereWithAggregatesInput.schema';
import { UserRoleScalarFieldEnumSchema } from './enums/UserRoleScalarFieldEnum.schema';

export const UserRoleGroupBySchema = z.object({
  where: UserRoleWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      UserRoleOrderByWithAggregationInputObjectSchema,
      UserRoleOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: UserRoleScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(UserRoleScalarFieldEnumSchema),
});
