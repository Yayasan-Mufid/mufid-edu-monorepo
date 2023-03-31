import { z } from 'zod';
import { ModuleArgsObjectSchema } from './ModuleArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAccessSelect> = z
  .object({
    id: z.boolean().optional(),
    module_id: z.boolean().optional(),
    module: z
      .union([z.boolean(), z.lazy(() => ModuleArgsObjectSchema)])
      .optional(),
    user_id: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    granted_on: z.boolean().optional(),
  })
  .strict();

export const ModuleAccessSelectObjectSchema = Schema;
