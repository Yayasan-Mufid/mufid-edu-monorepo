import { z } from 'zod';
import { StudyGroupApplicantUpdateWithoutInvoiceInputObjectSchema } from './StudyGroupApplicantUpdateWithoutInvoiceInput.schema';
import { StudyGroupApplicantUncheckedUpdateWithoutInvoiceInputObjectSchema } from './StudyGroupApplicantUncheckedUpdateWithoutInvoiceInput.schema';
import { StudyGroupApplicantCreateWithoutInvoiceInputObjectSchema } from './StudyGroupApplicantCreateWithoutInvoiceInput.schema';
import { StudyGroupApplicantUncheckedCreateWithoutInvoiceInputObjectSchema } from './StudyGroupApplicantUncheckedCreateWithoutInvoiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupApplicantUpsertWithoutInvoiceInput> = z
  .object({
    update: z.union([
      z.lazy(() => StudyGroupApplicantUpdateWithoutInvoiceInputObjectSchema),
      z.lazy(
        () => StudyGroupApplicantUncheckedUpdateWithoutInvoiceInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => StudyGroupApplicantCreateWithoutInvoiceInputObjectSchema),
      z.lazy(
        () => StudyGroupApplicantUncheckedCreateWithoutInvoiceInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const StudyGroupApplicantUpsertWithoutInvoiceInputObjectSchema = Schema;
