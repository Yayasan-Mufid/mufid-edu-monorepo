import { z } from 'zod';
import { ModuleItemQuestionStatusCreateManyUserInputObjectSchema } from './ModuleItemQuestionStatusCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionStatusCreateManyUserInputEnvelope> =
  z
    .object({
      data: z
        .lazy(() => ModuleItemQuestionStatusCreateManyUserInputObjectSchema)
        .array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ModuleItemQuestionStatusCreateManyUserInputEnvelopeObjectSchema =
  Schema;
