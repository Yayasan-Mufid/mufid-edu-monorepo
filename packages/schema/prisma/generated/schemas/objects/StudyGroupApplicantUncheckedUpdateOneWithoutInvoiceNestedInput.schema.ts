import { z } from 'zod';
import { StudyGroupApplicantCreateWithoutInvoiceInputObjectSchema } from './StudyGroupApplicantCreateWithoutInvoiceInput.schema';
import { StudyGroupApplicantUncheckedCreateWithoutInvoiceInputObjectSchema } from './StudyGroupApplicantUncheckedCreateWithoutInvoiceInput.schema';
import { StudyGroupApplicantCreateOrConnectWithoutInvoiceInputObjectSchema } from './StudyGroupApplicantCreateOrConnectWithoutInvoiceInput.schema';
import { StudyGroupApplicantUpsertWithoutInvoiceInputObjectSchema } from './StudyGroupApplicantUpsertWithoutInvoiceInput.schema';
import { StudyGroupApplicantWhereUniqueInputObjectSchema } from './StudyGroupApplicantWhereUniqueInput.schema';
import { StudyGroupApplicantUpdateWithoutInvoiceInputObjectSchema } from './StudyGroupApplicantUpdateWithoutInvoiceInput.schema';
import { StudyGroupApplicantUncheckedUpdateWithoutInvoiceInputObjectSchema } from './StudyGroupApplicantUncheckedUpdateWithoutInvoiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupApplicantUncheckedUpdateOneWithoutInvoiceNestedInput> =
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
      upsert: z
        .lazy(() => StudyGroupApplicantUpsertWithoutInvoiceInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z
        .lazy(() => StudyGroupApplicantWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () => StudyGroupApplicantUpdateWithoutInvoiceInputObjectSchema,
          ),
          z.lazy(
            () =>
              StudyGroupApplicantUncheckedUpdateWithoutInvoiceInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const StudyGroupApplicantUncheckedUpdateOneWithoutInvoiceNestedInputObjectSchema =
  Schema;
