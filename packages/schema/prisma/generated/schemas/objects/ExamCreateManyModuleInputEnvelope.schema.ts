import { z } from 'zod';
import { ExamCreateManyModuleInputObjectSchema } from './ExamCreateManyModuleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamCreateManyModuleInputEnvelope> = z
  .object({
    data: z.lazy(() => ExamCreateManyModuleInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ExamCreateManyModuleInputEnvelopeObjectSchema = Schema;
