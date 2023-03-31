import { z } from 'zod';
import { StudyGroupCreateNestedOneWithoutApplicantsInputObjectSchema } from './StudyGroupCreateNestedOneWithoutApplicantsInput.schema';
import { InvoiceCreateNestedOneWithoutApplicantInputObjectSchema } from './InvoiceCreateNestedOneWithoutApplicantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupApplicantCreateWithoutUserInput> = z
  .object({
    created_at: z.date().optional(),
    study_group: z.lazy(
      () => StudyGroupCreateNestedOneWithoutApplicantsInputObjectSchema,
    ),
    invoice: z
      .lazy(() => InvoiceCreateNestedOneWithoutApplicantInputObjectSchema)
      .optional(),
  })
  .strict();

export const StudyGroupApplicantCreateWithoutUserInputObjectSchema = Schema;
