import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RolePermissionScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RolePermissionScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => RolePermissionScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RolePermissionScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RolePermissionScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => RolePermissionScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    role_name: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    permission_name: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const RolePermissionScalarWhereWithAggregatesInputObjectSchema = Schema;
