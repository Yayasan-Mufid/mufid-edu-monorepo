import { z } from 'zod';
import { ModuleItemCountOutputTypeSelectObjectSchema } from './ModuleItemCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemCountOutputTypeArgs> = z
  .object({
    select: z
      .lazy(() => ModuleItemCountOutputTypeSelectObjectSchema)
      .optional(),
  })
  .strict();

export const ModuleItemCountOutputTypeArgsObjectSchema = Schema;
