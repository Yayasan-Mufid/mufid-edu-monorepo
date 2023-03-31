import { z } from 'zod';
import { ModuleItemSelectObjectSchema } from './ModuleItemSelect.schema';
import { ModuleItemIncludeObjectSchema } from './ModuleItemInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemArgs> = z
  .object({
    select: z.lazy(() => ModuleItemSelectObjectSchema).optional(),
    include: z.lazy(() => ModuleItemIncludeObjectSchema).optional(),
  })
  .strict();

export const ModuleItemArgsObjectSchema = Schema;
