import { z } from 'zod';
import { ProgramWhereInputObjectSchema } from './ProgramWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramRelationFilter> = z
  .object({
    is: z.lazy(() => ProgramWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => ProgramWhereInputObjectSchema).optional(),
  })
  .strict();

export const ProgramRelationFilterObjectSchema = Schema;
