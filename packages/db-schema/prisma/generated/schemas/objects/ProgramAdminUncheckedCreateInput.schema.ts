import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramAdminUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    user_id: z.string(),
    program_id: z.string(),
    assigned_at: z.date().optional(),
  })
  .strict();

export const ProgramAdminUncheckedCreateInputObjectSchema = Schema;
