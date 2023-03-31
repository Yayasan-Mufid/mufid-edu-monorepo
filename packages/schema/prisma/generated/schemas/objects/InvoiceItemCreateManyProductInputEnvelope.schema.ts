import { z } from 'zod';
import { InvoiceItemCreateManyProductInputObjectSchema } from './InvoiceItemCreateManyProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemCreateManyProductInputEnvelope> = z
  .object({
    data: z.lazy(() => InvoiceItemCreateManyProductInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const InvoiceItemCreateManyProductInputEnvelopeObjectSchema = Schema;
