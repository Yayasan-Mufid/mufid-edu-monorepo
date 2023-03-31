import { z } from 'zod';
import { UserUpdateOneRequiredWithoutApplied_groupsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutApplied_groupsNestedInput.schema';
import { InvoiceUpdateOneWithoutApplicantNestedInputObjectSchema } from './InvoiceUpdateOneWithoutApplicantNestedInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupApplicantUpdateWithoutStudy_groupInput> =
  z
    .object({
      user: z
        .lazy(
          () =>
            UserUpdateOneRequiredWithoutApplied_groupsNestedInputObjectSchema,
        )
        .optional(),
      invoice: z
        .lazy(() => InvoiceUpdateOneWithoutApplicantNestedInputObjectSchema)
        .optional(),
      created_at: z
        .union([
          z.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const StudyGroupApplicantUpdateWithoutStudy_groupInputObjectSchema =
  Schema;
