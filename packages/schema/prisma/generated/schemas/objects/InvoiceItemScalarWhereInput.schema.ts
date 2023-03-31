import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => InvoiceItemScalarWhereInputObjectSchema),
        z.lazy(() => InvoiceItemScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => InvoiceItemScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => InvoiceItemScalarWhereInputObjectSchema),
        z.lazy(() => InvoiceItemScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    invoice_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    quantity: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    unit_price: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    discount: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    product_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const InvoiceItemScalarWhereInputObjectSchema = Schema;
