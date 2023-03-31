import { z } from 'zod';
import { ProgramAdminSelectObjectSchema } from './ProgramAdminSelect.schema';
import { ProgramAdminIncludeObjectSchema } from './ProgramAdminInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramAdminArgs> = z
  .object({
    select: z.lazy(() => ProgramAdminSelectObjectSchema).optional(),
    include: z.lazy(() => ProgramAdminIncludeObjectSchema).optional(),
  })
  .strict();

export const ProgramAdminArgsObjectSchema = Schema;
