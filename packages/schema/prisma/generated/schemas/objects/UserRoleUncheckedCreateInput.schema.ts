import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoleUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    user_id: z.string(),
    role_name: z.string(),
  })
  .strict();

export const UserRoleUncheckedCreateInputObjectSchema = Schema;
