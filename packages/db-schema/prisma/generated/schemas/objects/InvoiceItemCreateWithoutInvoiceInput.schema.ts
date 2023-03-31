import { z } from 'zod';
import { ProductCreateNestedOneWithoutInvoice_itemsInputObjectSchema } from './ProductCreateNestedOneWithoutInvoice_itemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemCreateWithoutInvoiceInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    quantity: z.number(),
    unit_price: z.number(),
    discount: z.number(),
    product: z
      .lazy(() => ProductCreateNestedOneWithoutInvoice_itemsInputObjectSchema)
      .optional(),
  })
  .strict();

export const InvoiceItemCreateWithoutInvoiceInputObjectSchema = Schema;
