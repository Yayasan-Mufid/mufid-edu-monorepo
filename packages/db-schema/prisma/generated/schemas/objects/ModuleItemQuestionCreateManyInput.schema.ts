import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionCreateManyInput> = z
  .object({
    id: z.string().optional(),
    module_item_id: z.string(),
    question_id: z.string(),
  })
  .strict();

export const ModuleItemQuestionCreateManyInputObjectSchema = Schema;
