import { z } from 'zod';
import { ProgramAdminWhereInputObjectSchema } from './ProgramAdminWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramAdminListRelationFilter> = z
  .object({
    every: z.lazy(() => ProgramAdminWhereInputObjectSchema).optional(),
    some: z.lazy(() => ProgramAdminWhereInputObjectSchema).optional(),
    none: z.lazy(() => ProgramAdminWhereInputObjectSchema).optional(),
  })
  .strict();

export const ProgramAdminListRelationFilterObjectSchema = Schema;
