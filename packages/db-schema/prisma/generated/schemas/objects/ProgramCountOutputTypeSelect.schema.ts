import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramCountOutputTypeSelect> = z
  .object({
    modules: z.boolean().optional(),
    admins: z.boolean().optional(),
    questions: z.boolean().optional(),
  })
  .strict();

export const ProgramCountOutputTypeSelectObjectSchema = Schema;
