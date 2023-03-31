import { z } from 'zod';
import { ModuleItemWhereInputObjectSchema } from './ModuleItemWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemListRelationFilter> = z
  .object({
    every: z.lazy(() => ModuleItemWhereInputObjectSchema).optional(),
    some: z.lazy(() => ModuleItemWhereInputObjectSchema).optional(),
    none: z.lazy(() => ModuleItemWhereInputObjectSchema).optional(),
  })
  .strict();

export const ModuleItemListRelationFilterObjectSchema = Schema;
