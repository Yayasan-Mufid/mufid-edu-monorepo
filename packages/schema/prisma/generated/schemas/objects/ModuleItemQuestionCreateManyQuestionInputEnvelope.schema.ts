import { z } from 'zod';
import { ModuleItemQuestionCreateManyQuestionInputObjectSchema } from './ModuleItemQuestionCreateManyQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionCreateManyQuestionInputEnvelope> =
  z
    .object({
      data: z
        .lazy(() => ModuleItemQuestionCreateManyQuestionInputObjectSchema)
        .array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ModuleItemQuestionCreateManyQuestionInputEnvelopeObjectSchema =
  Schema;
