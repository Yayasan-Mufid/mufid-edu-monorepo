import { z } from 'zod';
import { QuestionChoiceSelectObjectSchema } from './QuestionChoiceSelect.schema';
import { QuestionChoiceIncludeObjectSchema } from './QuestionChoiceInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionChoiceArgs> = z
  .object({
    select: z.lazy(() => QuestionChoiceSelectObjectSchema).optional(),
    include: z.lazy(() => QuestionChoiceIncludeObjectSchema).optional(),
  })
  .strict();

export const QuestionChoiceArgsObjectSchema = Schema;
