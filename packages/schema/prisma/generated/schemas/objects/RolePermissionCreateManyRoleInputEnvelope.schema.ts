import { z } from 'zod';
import { RolePermissionCreateManyRoleInputObjectSchema } from './RolePermissionCreateManyRoleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RolePermissionCreateManyRoleInputEnvelope> = z
  .object({
    data: z.lazy(() => RolePermissionCreateManyRoleInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const RolePermissionCreateManyRoleInputEnvelopeObjectSchema = Schema;
