import { z } from 'zod';
import { ModuleAdminSelectObjectSchema } from './ModuleAdminSelect.schema';
import { ModuleAdminIncludeObjectSchema } from './ModuleAdminInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAdminArgs> = z
  .object({
    select: z.lazy(() => ModuleAdminSelectObjectSchema).optional(),
    include: z.lazy(() => ModuleAdminIncludeObjectSchema).optional(),
  })
  .strict();

export const ModuleAdminArgsObjectSchema = Schema;
