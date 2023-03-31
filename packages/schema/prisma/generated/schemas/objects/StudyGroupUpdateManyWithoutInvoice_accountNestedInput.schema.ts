import { z } from 'zod';
import { StudyGroupCreateWithoutInvoice_accountInputObjectSchema } from './StudyGroupCreateWithoutInvoice_accountInput.schema';
import { StudyGroupUncheckedCreateWithoutInvoice_accountInputObjectSchema } from './StudyGroupUncheckedCreateWithoutInvoice_accountInput.schema';
import { StudyGroupCreateOrConnectWithoutInvoice_accountInputObjectSchema } from './StudyGroupCreateOrConnectWithoutInvoice_accountInput.schema';
import { StudyGroupUpsertWithWhereUniqueWithoutInvoice_accountInputObjectSchema } from './StudyGroupUpsertWithWhereUniqueWithoutInvoice_accountInput.schema';
import { StudyGroupCreateManyInvoice_accountInputEnvelopeObjectSchema } from './StudyGroupCreateManyInvoice_accountInputEnvelope.schema';
import { StudyGroupWhereUniqueInputObjectSchema } from './StudyGroupWhereUniqueInput.schema';
import { StudyGroupUpdateWithWhereUniqueWithoutInvoice_accountInputObjectSchema } from './StudyGroupUpdateWithWhereUniqueWithoutInvoice_accountInput.schema';
import { StudyGroupUpdateManyWithWhereWithoutInvoice_accountInputObjectSchema } from './StudyGroupUpdateManyWithWhereWithoutInvoice_accountInput.schema';
import { StudyGroupScalarWhereInputObjectSchema } from './StudyGroupScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupUpdateManyWithoutInvoice_accountNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              StudyGroupUpsertWithWhereUniqueWithoutInvoice_accountInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupUpsertWithWhereUniqueWithoutInvoice_accountInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => StudyGroupCreateManyInvoice_accountInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => StudyGroupWhereUniqueInputObjectSchema),
          z.lazy(() => StudyGroupWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => StudyGroupWhereUniqueInputObjectSchema),
          z.lazy(() => StudyGroupWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => StudyGroupWhereUniqueInputObjectSchema),
          z.lazy(() => StudyGroupWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => StudyGroupWhereUniqueInputObjectSchema),
          z.lazy(() => StudyGroupWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              StudyGroupUpdateWithWhereUniqueWithoutInvoice_accountInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupUpdateWithWhereUniqueWithoutInvoice_accountInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              StudyGroupUpdateManyWithWhereWithoutInvoice_accountInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupUpdateManyWithWhereWithoutInvoice_accountInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => StudyGroupScalarWhereInputObjectSchema),
          z.lazy(() => StudyGroupScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const StudyGroupUpdateManyWithoutInvoice_accountNestedInputObjectSchema =
  Schema;
