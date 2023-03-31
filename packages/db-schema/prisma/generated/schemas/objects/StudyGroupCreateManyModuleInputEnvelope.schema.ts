import { z } from 'zod';
import { StudyGroupCreateManyModuleInputObjectSchema } from './StudyGroupCreateManyModuleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupCreateManyModuleInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => StudyGroupCreateManyModuleInputObjectSchema),
      z.lazy(() => StudyGroupCreateManyModuleInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const StudyGroupCreateManyModuleInputEnvelopeObjectSchema = Schema;
