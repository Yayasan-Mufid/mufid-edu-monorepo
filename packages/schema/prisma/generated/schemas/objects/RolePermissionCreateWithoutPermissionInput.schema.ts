import { z } from 'zod';
import { RoleCreateNestedOneWithoutRole_permissionsInputObjectSchema } from './RoleCreateNestedOneWithoutRole_permissionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RolePermissionCreateWithoutPermissionInput> = z
  .object({
    id: z.string().optional(),
    role: z.lazy(
      () => RoleCreateNestedOneWithoutRole_permissionsInputObjectSchema,
    ),
  })
  .strict();

export const RolePermissionCreateWithoutPermissionInputObjectSchema = Schema;
