import { z } from 'zod';
import { ProgramCountOutputTypeSelectObjectSchema } from './ProgramCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => ProgramCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict();

export const ProgramCountOutputTypeArgsObjectSchema = Schema;
