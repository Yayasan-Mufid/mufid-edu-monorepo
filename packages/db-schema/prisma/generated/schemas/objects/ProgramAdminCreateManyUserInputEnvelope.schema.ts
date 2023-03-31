import { z } from 'zod';
import { ProgramAdminCreateManyUserInputObjectSchema } from './ProgramAdminCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramAdminCreateManyUserInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ProgramAdminCreateManyUserInputObjectSchema),
      z.lazy(() => ProgramAdminCreateManyUserInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ProgramAdminCreateManyUserInputEnvelopeObjectSchema = Schema;
