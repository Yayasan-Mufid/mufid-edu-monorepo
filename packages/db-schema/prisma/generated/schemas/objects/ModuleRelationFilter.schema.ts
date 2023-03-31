import { z } from 'zod';
import { ModuleWhereInputObjectSchema } from './ModuleWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleRelationFilter> = z
  .object({
    is: z
      .lazy(() => ModuleWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ModuleWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const ModuleRelationFilterObjectSchema = Schema;
