import { z } from 'zod';
import { InvoiceCreateManyAccountInputObjectSchema } from './InvoiceCreateManyAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceCreateManyAccountInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => InvoiceCreateManyAccountInputObjectSchema),
      z.lazy(() => InvoiceCreateManyAccountInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const InvoiceCreateManyAccountInputEnvelopeObjectSchema = Schema;
