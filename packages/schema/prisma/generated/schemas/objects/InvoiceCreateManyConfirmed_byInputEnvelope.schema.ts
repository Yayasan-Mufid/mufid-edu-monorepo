import { z } from 'zod';
import { InvoiceCreateManyConfirmed_byInputObjectSchema } from './InvoiceCreateManyConfirmed_byInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceCreateManyConfirmed_byInputEnvelope> = z
  .object({
    data: z.lazy(() => InvoiceCreateManyConfirmed_byInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const InvoiceCreateManyConfirmed_byInputEnvelopeObjectSchema = Schema;
