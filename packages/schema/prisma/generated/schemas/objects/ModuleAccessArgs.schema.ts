import { z } from 'zod';
import { ModuleAccessSelectObjectSchema } from './ModuleAccessSelect.schema';
import { ModuleAccessIncludeObjectSchema } from './ModuleAccessInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAccessArgs> = z
  .object({
    select: z.lazy(() => ModuleAccessSelectObjectSchema).optional(),
    include: z.lazy(() => ModuleAccessIncludeObjectSchema).optional(),
  })
  .strict();

export const ModuleAccessArgsObjectSchema = Schema;
