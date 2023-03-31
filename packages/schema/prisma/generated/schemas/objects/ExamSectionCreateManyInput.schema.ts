import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionCreateManyInput> = z
  .object({
    id: z.string().optional(),
    exam_id: z.string(),
    title: z.string(),
    text: z.string(),
    randomize_questions: z.boolean().optional(),
    nb_of_questions: z.number(),
    seq: z.number(),
    default_point: z.number(),
    weight: z.number().optional(),
  })
  .strict();

export const ExamSectionCreateManyInputObjectSchema = Schema;
