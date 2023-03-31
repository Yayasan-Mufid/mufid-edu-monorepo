import { z } from 'zod';
import { ModuleItemCreateManyParent_itemInputObjectSchema } from './ModuleItemCreateManyParent_itemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemCreateManyParent_itemInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ModuleItemCreateManyParent_itemInputObjectSchema),
      z.lazy(() => ModuleItemCreateManyParent_itemInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ModuleItemCreateManyParent_itemInputEnvelopeObjectSchema = Schema;
