import { z } from 'zod';
import { PermissionWhereInputObjectSchema } from './PermissionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PermissionRelationFilter> = z
  .object({
    is: z.lazy(() => PermissionWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => PermissionWhereInputObjectSchema).optional(),
  })
  .strict();

export const PermissionRelationFilterObjectSchema = Schema;
