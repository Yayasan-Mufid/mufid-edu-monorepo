import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RoleOrderByWithRelationInputObjectSchema } from './RoleOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoleOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    role: z.lazy(() => RoleOrderByWithRelationInputObjectSchema).optional(),
    role_name: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const UserRoleOrderByWithRelationInputObjectSchema = Schema;
