import { z } from 'zod';
import { ModuleSelectObjectSchema } from './ModuleSelect.schema';
import { ModuleIncludeObjectSchema } from './ModuleInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleArgs> = z
  .object({
    select: z.lazy(() => ModuleSelectObjectSchema).optional(),
    include: z.lazy(() => ModuleIncludeObjectSchema).optional(),
  })
  .strict();

export const ModuleArgsObjectSchema = Schema;
