import { z } from 'zod';
import { ModuleItemCreateManyModuleInputObjectSchema } from './ModuleItemCreateManyModuleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemCreateManyModuleInputEnvelope> = z
  .object({
    data: z.lazy(() => ModuleItemCreateManyModuleInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ModuleItemCreateManyModuleInputEnvelopeObjectSchema = Schema;
