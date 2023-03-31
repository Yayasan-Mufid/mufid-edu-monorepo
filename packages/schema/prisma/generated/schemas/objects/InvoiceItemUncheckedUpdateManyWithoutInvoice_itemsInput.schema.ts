import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemUncheckedUpdateManyWithoutInvoice_itemsInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      invoice_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
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
    })
    .strict();

export const InvoiceItemUncheckedUpdateManyWithoutInvoice_itemsInputObjectSchema =
  Schema;
