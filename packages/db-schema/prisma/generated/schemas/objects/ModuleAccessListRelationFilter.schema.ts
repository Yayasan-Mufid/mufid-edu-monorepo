import { z } from 'zod';
import { ModuleAccessWhereInputObjectSchema } from './ModuleAccessWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAccessListRelationFilter> = z
  .object({
    every: z.lazy(() => ModuleAccessWhereInputObjectSchema).optional(),
    some: z.lazy(() => ModuleAccessWhereInputObjectSchema).optional(),
    none: z.lazy(() => ModuleAccessWhereInputObjectSchema).optional(),
  })
  .strict();

export const ModuleAccessListRelationFilterObjectSchema = Schema;
