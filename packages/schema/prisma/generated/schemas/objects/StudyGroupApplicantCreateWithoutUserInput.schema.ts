import { z } from 'zod';
import { StudyGroupCreateNestedOneWithoutApplicantsInputObjectSchema } from './StudyGroupCreateNestedOneWithoutApplicantsInput.schema';
import { InvoiceCreateNestedOneWithoutApplicantInputObjectSchema } from './InvoiceCreateNestedOneWithoutApplicantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupApplicantCreateWithoutUserInput> = z
  .object({
    study_group: z.lazy(
      () => StudyGroupCreateNestedOneWithoutApplicantsInputObjectSchema,
    ),
    invoice: z
      .lazy(() => InvoiceCreateNestedOneWithoutApplicantInputObjectSchema)
      .optional(),
    created_at: z.date().optional(),
  })
  .strict();

export const StudyGroupApplicantCreateWithoutUserInputObjectSchema = Schema;
