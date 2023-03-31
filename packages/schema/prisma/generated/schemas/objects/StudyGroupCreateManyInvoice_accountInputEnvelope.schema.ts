import { z } from 'zod';
import { StudyGroupCreateManyInvoice_accountInputObjectSchema } from './StudyGroupCreateManyInvoice_accountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupCreateManyInvoice_accountInputEnvelope> =
  z
    .object({
      data: z
        .lazy(() => StudyGroupCreateManyInvoice_accountInputObjectSchema)
        .array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const StudyGroupCreateManyInvoice_accountInputEnvelopeObjectSchema =
  Schema;
