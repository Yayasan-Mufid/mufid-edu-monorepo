import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionCountOutputTypeSelect> = z
  .object({
    choices: z.boolean().optional(),
    exam_sections: z.boolean().optional(),
    exam_items: z.boolean().optional(),
    module_item_question: z.boolean().optional(),
  })
  .strict();

export const QuestionCountOutputTypeSelectObjectSchema = Schema;
