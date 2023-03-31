import { z } from 'zod';
import { ProgramSelectObjectSchema } from './ProgramSelect.schema';
import { ProgramIncludeObjectSchema } from './ProgramInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramArgs> = z
  .object({
    select: z.lazy(() => ProgramSelectObjectSchema).optional(),
    include: z.lazy(() => ProgramIncludeObjectSchema).optional(),
  })
  .strict();

export const ProgramArgsObjectSchema = Schema;
