import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => InvoiceItemScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => InvoiceItemScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => InvoiceItemScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => InvoiceItemScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => InvoiceItemScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    invoice_id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    quantity: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    unit_price: z
      .union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    discount: z
      .union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    product_id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const InvoiceItemScalarWhereWithAggregatesInputObjectSchema = Schema;
