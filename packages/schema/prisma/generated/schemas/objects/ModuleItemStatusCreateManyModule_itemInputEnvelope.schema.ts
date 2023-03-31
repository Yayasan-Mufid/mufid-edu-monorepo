import { z } from 'zod';
import { ModuleItemStatusCreateManyModule_itemInputObjectSchema } from './ModuleItemStatusCreateManyModule_itemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemStatusCreateManyModule_itemInputEnvelope> =
  z
    .object({
      data: z
        .lazy(() => ModuleItemStatusCreateManyModule_itemInputObjectSchema)
        .array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ModuleItemStatusCreateManyModule_itemInputEnvelopeObjectSchema =
  Schema;
