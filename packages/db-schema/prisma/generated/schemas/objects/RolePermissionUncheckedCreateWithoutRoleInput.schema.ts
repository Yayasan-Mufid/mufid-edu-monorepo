import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RolePermissionUncheckedCreateWithoutRoleInput> =
  z
    .object({
      id: z.string().optional(),
      permission_name: z.string(),
    })
    .strict();

export const RolePermissionUncheckedCreateWithoutRoleInputObjectSchema = Schema;
