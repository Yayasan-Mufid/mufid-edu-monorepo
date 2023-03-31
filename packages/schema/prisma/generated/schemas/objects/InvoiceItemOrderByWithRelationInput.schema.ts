import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { InvoiceOrderByWithRelationInputObjectSchema } from './InvoiceOrderByWithRelationInput.schema';
import { ProductOrderByWithRelationInputObjectSchema } from './ProductOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    invoice_id: z.lazy(() => SortOrderSchema).optional(),
    invoice: z
      .lazy(() => InvoiceOrderByWithRelationInputObjectSchema)
      .optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    quantity: z.lazy(() => SortOrderSchema).optional(),
    unit_price: z.lazy(() => SortOrderSchema).optional(),
    discount: z.lazy(() => SortOrderSchema).optional(),
    product_id: z.lazy(() => SortOrderSchema).optional(),
    product: z
      .lazy(() => ProductOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const InvoiceItemOrderByWithRelationInputObjectSchema = Schema;
