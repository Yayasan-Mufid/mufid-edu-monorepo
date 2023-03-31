import { z } from 'zod';
import { ModuleItemStatusCreateManyUserInputObjectSchema } from './ModuleItemStatusCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemStatusCreateManyUserInputEnvelope> = z
  .object({
    data: z.lazy(() => ModuleItemStatusCreateManyUserInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ModuleItemStatusCreateManyUserInputEnvelopeObjectSchema = Schema;
