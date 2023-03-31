import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamCreateManyInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    code: z.string(),
    module_id: z.string(),
    rules: z.string(),
  })
  .strict();

export const ExamCreateManyInputObjectSchema = Schema;
