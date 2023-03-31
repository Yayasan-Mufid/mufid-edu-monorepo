import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemCountOutputTypeSelect> = z
  .object({
    children: z.boolean().optional(),
    attachments: z.boolean().optional(),
    user_status: z.boolean().optional(),
    schedule: z.boolean().optional(),
    quiz: z.boolean().optional(),
  })
  .strict();

export const ModuleItemCountOutputTypeSelectObjectSchema = Schema;
