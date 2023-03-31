import { z } from 'zod';
import { UserRoleWhereInputObjectSchema } from './UserRoleWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoleListRelationFilter> = z
  .object({
    every: z.lazy(() => UserRoleWhereInputObjectSchema).optional(),
    some: z.lazy(() => UserRoleWhereInputObjectSchema).optional(),
    none: z.lazy(() => UserRoleWhereInputObjectSchema).optional(),
  })
  .strict();

export const UserRoleListRelationFilterObjectSchema = Schema;
