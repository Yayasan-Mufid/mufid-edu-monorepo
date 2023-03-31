import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionStatusCreateManyInput> = z
  .object({
    question_id: z.string(),
    user_id: z.string(),
    status: z.string(),
  })
  .strict();

export const ModuleItemQuestionStatusCreateManyInputObjectSchema = Schema;
