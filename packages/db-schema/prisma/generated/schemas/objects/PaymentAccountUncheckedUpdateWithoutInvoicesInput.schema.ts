import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { StudyGroupUncheckedUpdateManyWithoutInvoice_accountNestedInputObjectSchema } from './StudyGroupUncheckedUpdateManyWithoutInvoice_accountNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountUncheckedUpdateWithoutInvoicesInput> =
  z
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
      study_groups: z
        .lazy(
          () =>
            StudyGroupUncheckedUpdateManyWithoutInvoice_accountNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const PaymentAccountUncheckedUpdateWithoutInvoicesInputObjectSchema =
  Schema;
