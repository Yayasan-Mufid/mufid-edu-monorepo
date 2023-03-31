import { z } from 'zod';
import { ModuleCountOutputTypeSelectObjectSchema } from './ModuleCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => ModuleCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict();

export const ModuleCountOutputTypeArgsObjectSchema = Schema;
