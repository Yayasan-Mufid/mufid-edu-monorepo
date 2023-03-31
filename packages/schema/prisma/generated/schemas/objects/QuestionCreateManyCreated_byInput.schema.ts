import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionCreateManyCreated_byInput> = z
  .object({
    id: z.string().optional(),
    program_id: z.string().optional().nullable(),
    module_id: z.string().optional().nullable(),
    text: z.string(),
    type: z.string(),
    grading_hint: z.string().optional().nullable(),
    max_score: z.number(),
    randomize_choices: z.boolean().optional(),
    validated_by_id: z.string().optional().nullable(),
    validator_note: z.string().optional().nullable(),
    created_at: z.date().optional(),
    validated_at: z.date().optional().nullable(),
  })
  .strict();

export const QuestionCreateManyCreated_byInputObjectSchema = Schema;
