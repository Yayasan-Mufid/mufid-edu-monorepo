import { z } from 'zod';
import { ModuleItemArgsObjectSchema } from './ModuleItemArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemStatusSelect> = z
  .object({
    module_item_id: z.boolean().optional(),
    module_item: z
      .union([z.boolean(), z.lazy(() => ModuleItemArgsObjectSchema)])
      .optional(),
    user_id: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    status: z.boolean().optional(),
    updated_at: z.boolean().optional(),
  })
  .strict();

export const ModuleItemStatusSelectObjectSchema = Schema;
