import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutInvoicesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutInvoicesNestedInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { PaymentAccountUpdateOneRequiredWithoutInvoicesNestedInputObjectSchema } from './PaymentAccountUpdateOneRequiredWithoutInvoicesNestedInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { InvoiceItemUpdateManyWithoutInvoiceNestedInputObjectSchema } from './InvoiceItemUpdateManyWithoutInvoiceNestedInput.schema';
import { StudyGroupApplicantUpdateOneWithoutInvoiceNestedInputObjectSchema } from './StudyGroupApplicantUpdateOneWithoutInvoiceNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceUpdateWithoutConfirmed_byInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutInvoicesNestedInputObjectSchema)
      .optional(),
    title: z
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
    amount: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    payment_method: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    account: z
      .lazy(
        () =>
          PaymentAccountUpdateOneRequiredWithoutInvoicesNestedInputObjectSchema,
      )
      .optional(),
    paid_amount: z
      .union([
        z.number(),
        z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    mismatch: z
      .union([
        z.number(),
        z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    paid_at: z
      .union([
        z.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    payment_receipt_url: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    confirmed_at: z
      .union([
        z.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    status: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    deadline: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    items: z
      .lazy(() => InvoiceItemUpdateManyWithoutInvoiceNestedInputObjectSchema)
      .optional(),
    applicant: z
      .lazy(
        () => StudyGroupApplicantUpdateOneWithoutInvoiceNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const InvoiceUpdateWithoutConfirmed_byInputObjectSchema = Schema;
