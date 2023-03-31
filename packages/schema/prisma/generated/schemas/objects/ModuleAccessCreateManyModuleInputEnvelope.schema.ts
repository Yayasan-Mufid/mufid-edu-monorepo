import { z } from 'zod';
import { ModuleAccessCreateManyModuleInputObjectSchema } from './ModuleAccessCreateManyModuleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAccessCreateManyModuleInputEnvelope> = z
  .object({
    data: z.lazy(() => ModuleAccessCreateManyModuleInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ModuleAccessCreateManyModuleInputEnvelopeObjectSchema = Schema;
