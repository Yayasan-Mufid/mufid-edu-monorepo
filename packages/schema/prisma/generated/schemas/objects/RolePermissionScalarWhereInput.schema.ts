import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RolePermissionScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RolePermissionScalarWhereInputObjectSchema),
        z.lazy(() => RolePermissionScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RolePermissionScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RolePermissionScalarWhereInputObjectSchema),
        z.lazy(() => RolePermissionScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    role_name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    permission_name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const RolePermissionScalarWhereInputObjectSchema = Schema;
