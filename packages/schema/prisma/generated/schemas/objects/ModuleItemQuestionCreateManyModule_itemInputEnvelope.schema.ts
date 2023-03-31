import { z } from 'zod';
import { ModuleItemQuestionCreateManyModule_itemInputObjectSchema } from './ModuleItemQuestionCreateManyModule_itemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionCreateManyModule_itemInputEnvelope> =
  z
    .object({
      data: z
        .lazy(() => ModuleItemQuestionCreateManyModule_itemInputObjectSchema)
        .array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ModuleItemQuestionCreateManyModule_itemInputEnvelopeObjectSchema =
  Schema;
