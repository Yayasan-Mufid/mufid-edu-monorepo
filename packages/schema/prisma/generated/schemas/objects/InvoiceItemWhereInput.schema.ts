import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { InvoiceRelationFilterObjectSchema } from './InvoiceRelationFilter.schema';
import { InvoiceWhereInputObjectSchema } from './InvoiceWhereInput.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { ProductRelationFilterObjectSchema } from './ProductRelationFilter.schema';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => InvoiceItemWhereInputObjectSchema),
        z.lazy(() => InvoiceItemWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => InvoiceItemWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => InvoiceItemWhereInputObjectSchema),
        z.lazy(() => InvoiceItemWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    invoice_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    invoice: z
      .union([
        z.lazy(() => InvoiceRelationFilterObjectSchema),
        z.lazy(() => InvoiceWhereInputObjectSchema),
      ])
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
    product: z
      .union([
        z.lazy(() => ProductRelationFilterObjectSchema),
        z.lazy(() => ProductWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const InvoiceItemWhereInputObjectSchema = Schema;
