import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramAdminCreateManyUserInput> = z
  .object({
    id: z.string().optional(),
    program_id: z.string(),
    assigned_at: z.date().optional(),
  })
  .strict();

export const ProgramAdminCreateManyUserInputObjectSchema = Schema;
