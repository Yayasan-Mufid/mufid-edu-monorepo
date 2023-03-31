import { z } from 'zod';
import { ModuleAdminWhereInputObjectSchema } from './ModuleAdminWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAdminListRelationFilter> = z
  .object({
    every: z.lazy(() => ModuleAdminWhereInputObjectSchema).optional(),
    some: z.lazy(() => ModuleAdminWhereInputObjectSchema).optional(),
    none: z.lazy(() => ModuleAdminWhereInputObjectSchema).optional(),
  })
  .strict();

export const ModuleAdminListRelationFilterObjectSchema = Schema;
