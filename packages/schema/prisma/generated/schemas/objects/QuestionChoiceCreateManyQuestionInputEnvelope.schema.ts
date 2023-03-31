import { z } from 'zod';
import { QuestionChoiceCreateManyQuestionInputObjectSchema } from './QuestionChoiceCreateManyQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionChoiceCreateManyQuestionInputEnvelope> =
  z
    .object({
      data: z
        .lazy(() => QuestionChoiceCreateManyQuestionInputObjectSchema)
        .array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const QuestionChoiceCreateManyQuestionInputEnvelopeObjectSchema = Schema;
