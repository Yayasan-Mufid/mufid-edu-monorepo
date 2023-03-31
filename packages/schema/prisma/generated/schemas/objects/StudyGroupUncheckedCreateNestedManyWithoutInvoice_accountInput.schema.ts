import { z } from 'zod';
import { StudyGroupCreateWithoutInvoice_accountInputObjectSchema } from './StudyGroupCreateWithoutInvoice_accountInput.schema';
import { StudyGroupUncheckedCreateWithoutInvoice_accountInputObjectSchema } from './StudyGroupUncheckedCreateWithoutInvoice_accountInput.schema';
import { StudyGroupCreateOrConnectWithoutInvoice_accountInputObjectSchema } from './StudyGroupCreateOrConnectWithoutInvoice_accountInput.schema';
import { StudyGroupCreateManyInvoice_accountInputEnvelopeObjectSchema } from './StudyGroupCreateManyInvoice_accountInputEnvelope.schema';
import { StudyGroupWhereUniqueInputObjectSchema } from './StudyGroupWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupUncheckedCreateNestedManyWithoutInvoice_accountInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StudyGroupCreateWithoutInvoice_accountInputObjectSchema),
          z
            .lazy(() => StudyGroupCreateWithoutInvoice_accountInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              StudyGroupUncheckedCreateWithoutInvoice_accountInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupUncheckedCreateWithoutInvoice_accountInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              StudyGroupCreateOrConnectWithoutInvoice_accountInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupCreateOrConnectWithoutInvoice_accountInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => StudyGroupCreateManyInvoice_accountInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => StudyGroupWhereUniqueInputObjectSchema),
          z.lazy(() => StudyGroupWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const StudyGroupUncheckedCreateNestedManyWithoutInvoice_accountInputObjectSchema =
  Schema;
