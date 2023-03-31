import { z } from 'zod';
import { ModuleItemWhereInputObjectSchema } from './ModuleItemWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemRelationFilter> = z
  .object({
    is: z
      .lazy(() => ModuleItemWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ModuleItemWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const ModuleItemRelationFilterObjectSchema = Schema;
