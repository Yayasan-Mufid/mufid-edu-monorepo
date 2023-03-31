import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramAdminUncheckedCreateWithoutProgramInput> =
  z
    .object({
      id: z.string().optional(),
      user_id: z.string(),
      assigned_at: z.date().optional(),
    })
    .strict();

export const ProgramAdminUncheckedCreateWithoutProgramInputObjectSchema =
  Schema;
