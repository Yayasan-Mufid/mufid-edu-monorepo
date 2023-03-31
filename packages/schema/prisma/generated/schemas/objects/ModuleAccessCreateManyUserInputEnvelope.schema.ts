import { z } from 'zod';
import { ModuleAccessCreateManyUserInputObjectSchema } from './ModuleAccessCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAccessCreateManyUserInputEnvelope> = z
  .object({
    data: z.lazy(() => ModuleAccessCreateManyUserInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ModuleAccessCreateManyUserInputEnvelopeObjectSchema = Schema;
