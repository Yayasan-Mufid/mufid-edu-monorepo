import { z } from 'zod';
import { ModuleCreateManyProgramInputObjectSchema } from './ModuleCreateManyProgramInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleCreateManyProgramInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ModuleCreateManyProgramInputObjectSchema),
      z.lazy(() => ModuleCreateManyProgramInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ModuleCreateManyProgramInputEnvelopeObjectSchema = Schema;
