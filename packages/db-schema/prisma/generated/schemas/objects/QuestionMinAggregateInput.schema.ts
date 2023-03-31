import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    program_id: z.literal(true).optional(),
    module_id: z.literal(true).optional(),
    text: z.literal(true).optional(),
    type: z.literal(true).optional(),
    grading_hint: z.literal(true).optional(),
    max_score: z.literal(true).optional(),
    randomize_choices: z.literal(true).optional(),
    created_by_id: z.literal(true).optional(),
    validated_by_id: z.literal(true).optional(),
    validator_note: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    validated_at: z.literal(true).optional(),
  })
  .strict();

export const QuestionMinAggregateInputObjectSchema = Schema;
