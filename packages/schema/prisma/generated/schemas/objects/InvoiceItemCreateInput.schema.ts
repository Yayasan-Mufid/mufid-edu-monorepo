import { z } from 'zod';
import { InvoiceCreateNestedOneWithoutItemsInputObjectSchema } from './InvoiceCreateNestedOneWithoutItemsInput.schema';
import { ProductCreateNestedOneWithoutInvoice_itemsInputObjectSchema } from './ProductCreateNestedOneWithoutInvoice_itemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemCreateInput> = z
  .object({
    id: z.string().optional(),
    invoice: z.lazy(() => InvoiceCreateNestedOneWithoutItemsInputObjectSchema),
    name: z.string(),
    quantity: z.number(),
    unit_price: z.number(),
    discount: z.number(),
    product: z
      .lazy(() => ProductCreateNestedOneWithoutInvoice_itemsInputObjectSchema)
      .optional(),
  })
  .strict();

export const InvoiceItemCreateInputObjectSchema = Schema;
