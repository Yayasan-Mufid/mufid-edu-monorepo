import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionCountOutputTypeSelect> = z
  .object({
    user_status: z.boolean().optional(),
  })
  .strict();

export const ModuleItemQuestionCountOutputTypeSelectObjectSchema = Schema;
