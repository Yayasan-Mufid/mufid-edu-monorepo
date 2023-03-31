import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleCreateManyInput> = z
  .object({
    role: z.string(),
    description: z.string().optional().nullable(),
  })
  .strict();

export const RoleCreateManyInputObjectSchema = Schema;
