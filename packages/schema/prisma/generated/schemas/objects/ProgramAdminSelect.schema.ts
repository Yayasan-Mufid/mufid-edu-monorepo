import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { ProgramArgsObjectSchema } from './ProgramArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramAdminSelect> = z
  .object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    program_id: z.boolean().optional(),
    program: z
      .union([z.boolean(), z.lazy(() => ProgramArgsObjectSchema)])
      .optional(),
    assigned_at: z.boolean().optional(),
  })
  .strict();

export const ProgramAdminSelectObjectSchema = Schema;
