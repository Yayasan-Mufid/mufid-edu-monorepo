import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    module_item_id: z.literal(true).optional(),
    question_id: z.literal(true).optional(),
  })
  .strict();

export const ModuleItemQuestionMinAggregateInputObjectSchema = Schema;
