import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PermissionCreateWithoutRole_permissionsInput> = z
  .object({
    name: z.string(),
    description: z.string().optional().nullable(),
  })
  .strict();

export const PermissionCreateWithoutRole_permissionsInputObjectSchema = Schema;
