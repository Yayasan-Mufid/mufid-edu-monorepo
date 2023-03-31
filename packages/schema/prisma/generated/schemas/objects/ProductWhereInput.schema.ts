import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { InvoiceItemListRelationFilterObjectSchema } from './InvoiceItemListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ProductWhereInputObjectSchema),
        z.lazy(() => ProductWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProductWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProductWhereInputObjectSchema),
        z.lazy(() => ProductWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    unit_price: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    invoice_items: z
      .lazy(() => InvoiceItemListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const ProductWhereInputObjectSchema = Schema;
