import { z } from 'zod';
import { InvoiceCreateManyUserInputObjectSchema } from './InvoiceCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceCreateManyUserInputEnvelope> = z
  .object({
    data: z.lazy(() => InvoiceCreateManyUserInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const InvoiceCreateManyUserInputEnvelopeObjectSchema = Schema;
