import { z } from 'zod';
import { StudyGroupApplicantWhereUniqueInputObjectSchema } from './StudyGroupApplicantWhereUniqueInput.schema';
import { StudyGroupApplicantCreateWithoutInvoiceInputObjectSchema } from './StudyGroupApplicantCreateWithoutInvoiceInput.schema';
import { StudyGroupApplicantUncheckedCreateWithoutInvoiceInputObjectSchema } from './StudyGroupApplicantUncheckedCreateWithoutInvoiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupApplicantCreateOrConnectWithoutInvoiceInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupApplicantWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => StudyGroupApplicantCreateWithoutInvoiceInputObjectSchema),
        z.lazy(
          () =>
            StudyGroupApplicantUncheckedCreateWithoutInvoiceInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupApplicantCreateOrConnectWithoutInvoiceInputObjectSchema =
  Schema;
