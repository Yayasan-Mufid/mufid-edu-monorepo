import { z } from 'zod';
import { StudyGroupUpdateOneRequiredWithoutApplicantsNestedInputObjectSchema } from './StudyGroupUpdateOneRequiredWithoutApplicantsNestedInput.schema';
import { InvoiceUpdateOneWithoutApplicantNestedInputObjectSchema } from './InvoiceUpdateOneWithoutApplicantNestedInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupApplicantUpdateWithoutUserInput> = z
  .object({
    study_group: z
      .lazy(
        () =>
          StudyGroupUpdateOneRequiredWithoutApplicantsNestedInputObjectSchema,
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

export const StudyGroupApplicantUpdateWithoutUserInputObjectSchema = Schema;
