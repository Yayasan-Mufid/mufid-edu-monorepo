import { z } from 'zod';
import { QuestionCreateManyCreated_byInputObjectSchema } from './QuestionCreateManyCreated_byInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionCreateManyCreated_byInputEnvelope> = z
  .object({
    data: z.lazy(() => QuestionCreateManyCreated_byInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const QuestionCreateManyCreated_byInputEnvelopeObjectSchema = Schema;
