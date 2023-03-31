import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoleMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    user_id: z.literal(true).optional(),
    role_name: z.literal(true).optional(),
  })
  .strict();

export const UserRoleMaxAggregateInputObjectSchema = Schema;
