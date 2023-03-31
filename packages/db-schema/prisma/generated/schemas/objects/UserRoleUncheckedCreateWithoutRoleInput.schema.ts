import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoleUncheckedCreateWithoutRoleInput> = z
  .object({
    id: z.string().optional(),
    user_id: z.string(),
  })
  .strict();

export const UserRoleUncheckedCreateWithoutRoleInputObjectSchema = Schema;
