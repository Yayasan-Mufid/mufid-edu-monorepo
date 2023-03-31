import { z } from 'zod';
import { RolePermissionUncheckedCreateNestedManyWithoutPermissionInputObjectSchema } from './RolePermissionUncheckedCreateNestedManyWithoutPermissionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PermissionUncheckedCreateInput> = z
  .object({
    name: z.string(),
    description: z.string().optional().nullable(),
    role_permissions: z
      .lazy(
        () =>
          RolePermissionUncheckedCreateNestedManyWithoutPermissionInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PermissionUncheckedCreateInputObjectSchema = Schema;
