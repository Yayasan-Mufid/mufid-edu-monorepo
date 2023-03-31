import { z } from 'zod';
import { UserRoleOrderByWithRelationInputObjectSchema } from './objects/UserRoleOrderByWithRelationInput.schema';
import { UserRoleWhereInputObjectSchema } from './objects/UserRoleWhereInput.schema';
import { UserRoleWhereUniqueInputObjectSchema } from './objects/UserRoleWhereUniqueInput.schema';
import { UserRoleCountAggregateInputObjectSchema } from './objects/UserRoleCountAggregateInput.schema';
import { UserRoleMinAggregateInputObjectSchema } from './objects/UserRoleMinAggregateInput.schema';
import { UserRoleMaxAggregateInputObjectSchema } from './objects/UserRoleMaxAggregateInput.schema';

export const UserRoleAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), UserRoleCountAggregateInputObjectSchema])
    .optional(),
  _min: UserRoleMinAggregateInputObjectSchema.optional(),
  _max: UserRoleMaxAggregateInputObjectSchema.optional(),
});
