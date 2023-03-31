import { z } from 'zod';
import { ProgramAdminCreateManyProgramInputObjectSchema } from './ProgramAdminCreateManyProgramInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramAdminCreateManyProgramInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ProgramAdminCreateManyProgramInputObjectSchema),
      z.lazy(() => ProgramAdminCreateManyProgramInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ProgramAdminCreateManyProgramInputEnvelopeObjectSchema = Schema;
