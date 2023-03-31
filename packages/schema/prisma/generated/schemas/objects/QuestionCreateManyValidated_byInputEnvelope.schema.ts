import { z } from 'zod';
import { QuestionCreateManyValidated_byInputObjectSchema } from './QuestionCreateManyValidated_byInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionCreateManyValidated_byInputEnvelope> = z
  .object({
    data: z.lazy(() => QuestionCreateManyValidated_byInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const QuestionCreateManyValidated_byInputEnvelopeObjectSchema = Schema;
