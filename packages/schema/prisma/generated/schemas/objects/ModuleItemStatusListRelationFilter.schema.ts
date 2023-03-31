import { z } from 'zod';
import { ModuleItemStatusWhereInputObjectSchema } from './ModuleItemStatusWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemStatusListRelationFilter> = z
  .object({
    every: z.lazy(() => ModuleItemStatusWhereInputObjectSchema).optional(),
    some: z.lazy(() => ModuleItemStatusWhereInputObjectSchema).optional(),
    none: z.lazy(() => ModuleItemStatusWhereInputObjectSchema).optional(),
  })
  .strict();

export const ModuleItemStatusListRelationFilterObjectSchema = Schema;
