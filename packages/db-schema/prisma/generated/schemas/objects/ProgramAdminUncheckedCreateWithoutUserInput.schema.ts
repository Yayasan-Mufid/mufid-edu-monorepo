import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramAdminUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    program_id: z.string(),
    assigned_at: z.date().optional(),
  })
  .strict();

export const ProgramAdminUncheckedCreateWithoutUserInputObjectSchema = Schema;
