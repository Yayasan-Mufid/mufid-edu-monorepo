import { z } from 'zod';
import { ModuleItemQuestionStatusCreateManyQuestionInputObjectSchema } from './ModuleItemQuestionStatusCreateManyQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionStatusCreateManyQuestionInputEnvelope> =
  z
    .object({
      data: z
        .lazy(() => ModuleItemQuestionStatusCreateManyQuestionInputObjectSchema)
        .array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ModuleItemQuestionStatusCreateManyQuestionInputEnvelopeObjectSchema =
  Schema;
