import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { InvoiceUpdateManyWithoutAccountNestedInputObjectSchema } from './InvoiceUpdateManyWithoutAccountNestedInput.schema';
import { StudyGroupUpdateManyWithoutInvoice_accountNestedInputObjectSchema } from './StudyGroupUpdateManyWithoutInvoice_accountNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountUpdateInput> = z
  .object({
    id: z
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
    type: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    account_identifier: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    logo_url: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    invoices: z
      .lazy(() => InvoiceUpdateManyWithoutAccountNestedInputObjectSchema)
      .optional(),
    study_groups: z
      .lazy(
        () => StudyGroupUpdateManyWithoutInvoice_accountNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PaymentAccountUpdateInputObjectSchema = Schema;
