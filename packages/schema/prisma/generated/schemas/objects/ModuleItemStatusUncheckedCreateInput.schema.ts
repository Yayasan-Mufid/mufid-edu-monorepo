import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemStatusUncheckedCreateInput> = z
  .object({
    module_item_id: z.string(),
    user_id: z.string(),
    status: z.string().optional(),
    updated_at: z.date().optional(),
  })
  .strict();

export const ModuleItemStatusUncheckedCreateInputObjectSchema = Schema;
