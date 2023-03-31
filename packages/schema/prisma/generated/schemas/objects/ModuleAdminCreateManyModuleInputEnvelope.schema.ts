import { z } from 'zod';
import { ModuleAdminCreateManyModuleInputObjectSchema } from './ModuleAdminCreateManyModuleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAdminCreateManyModuleInputEnvelope> = z
  .object({
    data: z.lazy(() => ModuleAdminCreateManyModuleInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ModuleAdminCreateManyModuleInputEnvelopeObjectSchema = Schema;
