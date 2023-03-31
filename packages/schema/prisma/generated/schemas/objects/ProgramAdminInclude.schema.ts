import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { ProgramArgsObjectSchema } from './ProgramArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramAdminInclude> = z
  .object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    program: z
      .union([z.boolean(), z.lazy(() => ProgramArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const ProgramAdminIncludeObjectSchema = Schema;
