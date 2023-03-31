import { z } from 'zod';
import { RolePermissionCreateManyPermissionInputObjectSchema } from './RolePermissionCreateManyPermissionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RolePermissionCreateManyPermissionInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => RolePermissionCreateManyPermissionInputObjectSchema),
        z
          .lazy(() => RolePermissionCreateManyPermissionInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const RolePermissionCreateManyPermissionInputEnvelopeObjectSchema =
  Schema;
