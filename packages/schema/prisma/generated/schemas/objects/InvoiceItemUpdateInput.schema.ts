import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { InvoiceUpdateOneRequiredWithoutItemsNestedInputObjectSchema } from './InvoiceUpdateOneRequiredWithoutItemsNestedInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { ProductUpdateOneWithoutInvoice_itemsNestedInputObjectSchema } from './ProductUpdateOneWithoutInvoice_itemsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    invoice: z
      .lazy(() => InvoiceUpdateOneRequiredWithoutItemsNestedInputObjectSchema)
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    quantity: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    unit_price: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    discount: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    product: z
      .lazy(() => ProductUpdateOneWithoutInvoice_itemsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const InvoiceItemUpdateInputObjectSchema = Schema;
