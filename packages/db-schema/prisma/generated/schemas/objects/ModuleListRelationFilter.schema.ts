import { z } from 'zod';
import { ModuleWhereInputObjectSchema } from './ModuleWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleListRelationFilter> = z
  .object({
    every: z.lazy(() => ModuleWhereInputObjectSchema).optional(),
    some: z.lazy(() => ModuleWhereInputObjectSchema).optional(),
    none: z.lazy(() => ModuleWhereInputObjectSchema).optional(),
  })
  .strict();

export const ModuleListRelationFilterObjectSchema = Schema;
