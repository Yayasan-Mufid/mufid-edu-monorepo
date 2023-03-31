import { z } from 'zod';
import { QuestionCreateManyModuleInputObjectSchema } from './QuestionCreateManyModuleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionCreateManyModuleInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => QuestionCreateManyModuleInputObjectSchema),
      z.lazy(() => QuestionCreateManyModuleInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const QuestionCreateManyModuleInputEnvelopeObjectSchema = Schema;
