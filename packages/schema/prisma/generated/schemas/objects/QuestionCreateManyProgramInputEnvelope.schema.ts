import { z } from 'zod';
import { QuestionCreateManyProgramInputObjectSchema } from './QuestionCreateManyProgramInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionCreateManyProgramInputEnvelope> = z
  .object({
    data: z.lazy(() => QuestionCreateManyProgramInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const QuestionCreateManyProgramInputEnvelopeObjectSchema = Schema;
