import { z } from 'zod';
import { ModuleItemStatusSelectObjectSchema } from './ModuleItemStatusSelect.schema';
import { ModuleItemStatusIncludeObjectSchema } from './ModuleItemStatusInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemStatusArgs> = z
  .object({
    select: z.lazy(() => ModuleItemStatusSelectObjectSchema).optional(),
    include: z.lazy(() => ModuleItemStatusIncludeObjectSchema).optional(),
  })
  .strict();

export const ModuleItemStatusArgsObjectSchema = Schema;
