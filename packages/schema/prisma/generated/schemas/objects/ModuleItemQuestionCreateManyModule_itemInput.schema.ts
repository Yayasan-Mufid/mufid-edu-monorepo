import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionCreateManyModule_itemInput> = z
  .object({
    id: z.string().optional(),
    question_id: z.string(),
  })
  .strict();

export const ModuleItemQuestionCreateManyModule_itemInputObjectSchema = Schema;
