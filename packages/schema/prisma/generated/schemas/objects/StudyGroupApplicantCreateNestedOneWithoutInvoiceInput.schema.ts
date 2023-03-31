import { z } from 'zod';
import { StudyGroupApplicantCreateWithoutInvoiceInputObjectSchema } from './StudyGroupApplicantCreateWithoutInvoiceInput.schema';
import { StudyGroupApplicantUncheckedCreateWithoutInvoiceInputObjectSchema } from './StudyGroupApplicantUncheckedCreateWithoutInvoiceInput.schema';
import { StudyGroupApplicantCreateOrConnectWithoutInvoiceInputObjectSchema } from './StudyGroupApplicantCreateOrConnectWithoutInvoiceInput.schema';
import { StudyGroupApplicantWhereUniqueInputObjectSchema } from './StudyGroupApplicantWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupApplicantCreateNestedOneWithoutInvoiceInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => StudyGroupApplicantCreateWithoutInvoiceInputObjectSchema,
          ),
          z.lazy(
            () =>
              StudyGroupApplicantUncheckedCreateWithoutInvoiceInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            StudyGroupApplicantCreateOrConnectWithoutInvoiceInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => StudyGroupApplicantWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const StudyGroupApplicantCreateNestedOneWithoutInvoiceInputObjectSchema =
  Schema;
