import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoleCreateManyUserInput> = z
  .object({
    id: z.string().optional(),
    role_name: z.string(),
  })
  .strict();

export const UserRoleCreateManyUserInputObjectSchema = Schema;
