import { z } from 'zod';
import { RolePermissionCreateNestedManyWithoutPermissionInputObjectSchema } from './RolePermissionCreateNestedManyWithoutPermissionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PermissionCreateInput> = z
  .object({
    name: z.string(),
    description: z.string().optional().nullable(),
    role_permissions: z
      .lazy(
        () => RolePermissionCreateNestedManyWithoutPermissionInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PermissionCreateInputObjectSchema = Schema;
