import { z } from 'zod';
import { ModuleAdminCreateManyUserInputObjectSchema } from './ModuleAdminCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAdminCreateManyUserInputEnvelope> = z
  .object({
    data: z.lazy(() => ModuleAdminCreateManyUserInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ModuleAdminCreateManyUserInputEnvelopeObjectSchema = Schema;
