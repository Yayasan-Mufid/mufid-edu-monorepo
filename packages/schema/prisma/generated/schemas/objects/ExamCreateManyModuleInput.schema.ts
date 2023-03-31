import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamCreateManyModuleInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    code: z.string(),
    rules: z.string(),
  })
  .strict();

export const ExamCreateManyModuleInputObjectSchema = Schema;
