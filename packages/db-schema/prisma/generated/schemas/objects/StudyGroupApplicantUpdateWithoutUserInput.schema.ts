import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StudyGroupUpdateOneRequiredWithoutApplicantsNestedInputObjectSchema } from './StudyGroupUpdateOneRequiredWithoutApplicantsNestedInput.schema';
import { InvoiceUpdateOneWithoutApplicantNestedInputObjectSchema } from './InvoiceUpdateOneWithoutApplicantNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupApplicantUpdateWithoutUserInput> = z
  .object({
    created_at: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    study_group: z
      .lazy(
        () =>
          StudyGroupUpdateOneRequiredWithoutApplicantsNestedInputObjectSchema,
      )
      .optional(),
    invoice: z
      .lazy(() => InvoiceUpdateOneWithoutApplicantNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const StudyGroupApplicantUpdateWithoutUserInputObjectSchema = Schema;
