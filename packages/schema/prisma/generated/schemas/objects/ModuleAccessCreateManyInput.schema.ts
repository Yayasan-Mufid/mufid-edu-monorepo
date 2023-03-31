import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAccessCreateManyInput> = z
  .object({
    id: z.string().optional(),
    module_id: z.string(),
    user_id: z.string(),
    granted_on: z.date().optional(),
  })
  .strict();

export const ModuleAccessCreateManyInputObjectSchema = Schema;
